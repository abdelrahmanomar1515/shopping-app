import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as firebase from 'firebase';
import { from, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { AuthActions } from '.';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router) { }

  signinEffect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.attemptSignin),
    exhaustMap(({ email, password }) =>
      from(firebase.auth().signInWithEmailAndPassword(email, password)).pipe(
        switchMap(userCredentials => from(firebase.auth().currentUser.getIdToken())),
        map(token => {
          this.router.navigate(['/']);
          return AuthActions.signinSuccess({ token });
        }),
        catchError(error => of(AuthActions.signinError({ error })))
      )
    )
  ));

  signupEffect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.attemptSignup),
    exhaustMap(({ email, password }) =>
      from(firebase.auth().createUserWithEmailAndPassword(email, password)).pipe(
        map(userCredentials => AuthActions.attemptSignin({ email, password })),
        catchError(error => of(AuthActions.signupError({ error: error || 'Failed to create account' })))
      )
    )
  ));

  signoutEffect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.attemptSignout),
    exhaustMap(() =>
      from(firebase.auth().signOut())
        .pipe(
          map(res => {
            this.router.navigate(['/signin']);
            return AuthActions.signoutSuccess();
          }),
          catchError(error => of(AuthActions.signoutError({ error: error || 'Failed to signout' })))
        )
    )
  ));
}
