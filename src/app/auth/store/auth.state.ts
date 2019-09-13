export interface State {
    token: string;
    signinError: string;
    signupError: string;
    signoutError: string;
    loading: boolean;
}

export const initialState: State = {
    token: null,
    signinError: null,
    signupError: null,
    signoutError: null,
    loading: false,
};

export const authFeatureKey = 'auth';
