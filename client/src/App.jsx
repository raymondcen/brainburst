import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthForm } from "./components/models/signup/authForm";
import { TestPage } from "./pages/testPage";
import UserPage from "./pages/userPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        {/* delete later */}
        <Route path="/testPage" element={<TestPage />} /> 
        <Route path="/home" element={<UserPage />} /> 

      </Routes>
    </Router>
  );
}
