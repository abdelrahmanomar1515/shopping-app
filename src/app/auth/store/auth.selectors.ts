import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/state';
import { AuthState } from '.';
import { authFeatureKey } from './auth.state';

const selectAuthState = createFeatureSelector<AppState, AuthState.State>(authFeatureKey);

export const selectToken = createSelector(
    selectAuthState,
    state => state.token
);

export const selectSigninError = createSelector(
    selectAuthState,
    state => state.signinError
);

export const selectSignupError = createSelector(
    selectAuthState,
    state => state.signupError
);

export const selectLoading = createSelector(
    selectAuthState,
    state => state.loading
);

export const selectIsAuthenticated = createSelector(
    selectToken,
    token => !!token
);
