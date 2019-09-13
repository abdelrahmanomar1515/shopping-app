import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/state';
import { AuthActions, AuthSelectors } from '../store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  signinError$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.signinError$ = this.store.pipe(select(AuthSelectors.selectSigninError));
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(AuthActions.attemptSignin({ email, password }));
  }
  ngOnDestroy(): void {
    this.store.dispatch(AuthActions.clearSigninError());
  }
}
