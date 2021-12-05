import { Authentication } from '../../models/Authentication';
import { AuthActions, AuthActionTypes } from './actions';

export const reducer = (
  state: Authentication,
  action: AuthActions
): Authentication => {
  switch (action.type) {
    case AuthActionTypes.signIn: {
      const token = action.payload?.token;
      const user = action.payload?.user;
      if (!token || !user) {
        throw new Error('SignInAction Error');
      }
      return { token, user };
    }
    case AuthActionTypes.signOut: {
      return {};
    }
    case AuthActionTypes.updateToken: {
      const token = action.payload?.token;
      if (!token) {
        throw new Error('UpdateTokenAction Error');
      }
      return { ...state, token };
    }
    default: {
      throw new Error('Invalid Auth Action Type');
    }
  }
};
