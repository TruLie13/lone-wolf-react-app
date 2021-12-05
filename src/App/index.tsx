import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthComponent from './components/AuthComponent';
import Dashboard from './components/DashboardComponent';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <AuthContext.Consumer>
        {(value) =>
          !value.state.token ? (
            <AuthComponent />
          ) : (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </BrowserRouter>
          )
        }
      </AuthContext.Consumer>
    </AuthContextProvider>
  );
};

export default App;
