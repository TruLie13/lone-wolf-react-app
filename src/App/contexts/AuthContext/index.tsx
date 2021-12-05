import React, { createContext, useReducer } from 'react';
import { Authentication } from '../../models/Authentication';
import { AuthActions } from './actions';
import { authReducer } from './reducer';

type AuthContextValue = {
  state: Authentication;
  dispatch: React.Dispatch<AuthActions>;
};
const initialState = {};
export const AuthContext = createContext<AuthContextValue>(
  initialState as AuthContextValue
);

type Props = {
  children: JSX.Element;
};
export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
