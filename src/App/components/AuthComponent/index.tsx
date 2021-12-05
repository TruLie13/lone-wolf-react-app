import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { SignIn } from '../../contexts/AuthContext/actions';
import { User } from '../../models/User';

const AuthComponent = () => {
  const { dispatch } = useContext(AuthContext);

  const signIn = () => {
    const user: User = { email: 'a.ruiz.jr@gmail.com', username: 'aruizj89' };
    dispatch(
      SignIn({
        token: 'Token',
        user,
      })
    );
  };

  return (
    <div>
      AuthComponent
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default AuthComponent;
