import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { SignOut } from '../../contexts/AuthContext/actions';

const DashboardComponent = () => {
  const { dispatch, state } = useContext(AuthContext);

  const signOut = () => dispatch(SignOut());

  return (
    <div>
      DashboardComponent
      <button onClick={signOut}>Sign {state.user?.username} Out</button>
    </div>
  );
};

export default DashboardComponent;
