import { createAction, props } from '@ngrx/store';

export const attemptSignin = createAction(
    '[Signin Page] Attempt Signin',
    props<{ email: string, password: string }>()
);

export const signinSuccess = createAction(
    '[Firebase API] Signin Success',
    props<{ token: string }>()
);

export const signinError = createAction(
    '[Firebase API] Signin Error',
    props<{ error: string }>()
);

export const clearSigninError = createAction(
    '[Signin Page] Clear Signin Error',
);

export const attemptSignup = createAction(
    '[Signup Page] Attempt Signup',
    props<{ email: string, password: string }>()
);

export const signupSuccess = createAction(
    '[Firebase API] Signup Success',
);

export const signupError = createAction(
    '[Firebase API] Signup Error',
    props<{ error: string }>()
);

export const clearSignupError = createAction(
    '[Signup Page] Clear Signup Error',
);

export const attemptSignout = createAction(
    '[Header] Attempt Signout'
);

export const signoutSuccess = createAction(
    '[Firebase API] Signout Success'
);

export const signoutError = createAction(
    '[Firebase API] Signout Error',
    props<{ error: string }>()
);
