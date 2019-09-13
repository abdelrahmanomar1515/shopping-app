import { createReducer, on } from '@ngrx/store';
import { AuthActions, AuthState } from '.';
import { initialState } from './auth.state';


const authReducer = createReducer(
    initialState,
    on(AuthActions.attemptSignin, state => ({
        ...state,
        signinError: null,
        loading: true,
    })),
    on(AuthActions.signinSuccess, (state, { token }) => ({
        ...state,
        signinError: null,
        loading: false,
        token
    })),
    on(AuthActions.signinError, (state, { error }) => ({
        ...state,
        signinError: error,
        loading: false
    })),
    on(AuthActions.clearSigninError, state => ({
        ...state,
        signinError: null
    })),
    on(AuthActions.attemptSignup, state => ({
        ...state,
        signupError: null,
        loading: true,
    })),
    on(AuthActions.signupSuccess, state => ({
        ...state,
        signupError: null,
        loading: false
    })),
    on(AuthActions.signupError, (state, { error }) => ({
        ...state,
        signupError: error,
        loading: false
    })),
    on(AuthActions.clearSignupError, state => ({
        ...state,
        signupError: null
    })),
    on(AuthActions.attemptSignout, state => ({
        ...state,
        loading: true
    })),
    on(AuthActions.signoutSuccess, state => ({
        ...state,
        signoutError: null,
        token: null
    })),
    on(AuthActions.signoutError, (state, { error }) => ({
        ...state,
        signoutError: error,
        loading: false
    })),
);


export function reducer(state: AuthState.State, action) {
    return authReducer(state, action);
}
