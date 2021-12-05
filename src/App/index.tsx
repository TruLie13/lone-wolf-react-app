import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthComponent from './components/AuthComponent';
import Dashboard from './components/DashboardComponent';
import { AuthContext } from './contexts/AuthContext';

const App = () => (
  <AuthContext.Provider value={{ initialContext: 'true' }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<AuthComponent />} />
      </Routes>
    </BrowserRouter>
  </AuthContext.Provider>
);

export default App;
