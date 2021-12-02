import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import Dashboard from "./Dashboard";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </BrowserRouter>
);

export default App;
