import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/state';
import { AuthActions, AuthSelectors } from '../store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  signupError$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.signupError$ = this.store.pipe(select(AuthSelectors.selectSignupError));
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(AuthActions.attemptSignup({ email, password }));
  }

  ngOnDestroy() {
    this.store.dispatch(AuthActions.clearSignupError());
  }
}
