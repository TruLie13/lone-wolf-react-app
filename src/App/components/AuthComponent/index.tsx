import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const AuthComponent = () => {
  const test = useContext(AuthContext);
  console.log(test);
  return (
    <div>
      AuthComponent
      <button onClick={() => (test.test = 'Art')}>New Test</button>
    </div>
  );
};

export default AuthComponent;
