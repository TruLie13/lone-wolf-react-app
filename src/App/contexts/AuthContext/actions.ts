import { Action } from '../../models/Action';
import { Authentication } from '../../models/Authentication';

export enum AuthActionTypes {
  signIn = 'SIGN_IN',
  signOut = 'SIGN_OUT',
  updateToken = 'UPDATE_TOKEN',
}

export type SignInAction = Action<AuthActionTypes, Authentication>;
export const SignIn = (payload: Authentication): SignInAction => ({
  payload,
  type: AuthActionTypes.signIn,
});

export type SignOutAction = Action<AuthActionTypes>;
export const SignOut = (): SignOutAction => ({
  type: AuthActionTypes.signOut,
});

export type UpdateTokenAction = Action<AuthActionTypes, Authentication>;
export const UpdateToken = (payload: Authentication): UpdateTokenAction => ({
  payload,
  type: AuthActionTypes.updateToken,
});

export type AuthActions = SignInAction | SignOutAction | UpdateTokenAction;
