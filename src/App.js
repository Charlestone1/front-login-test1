import "./App.css";
import Login from "./components/form/Login";
import SignUp from "./components/form/SignUp";
import RecoverPassword from "./components/form/RecoverPassword";
import UserDashboard from "./components/UserDashboard";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/recover_password" element={<RecoverPassword />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
