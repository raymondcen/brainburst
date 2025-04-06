import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthForm } from "./components/models/signup/signup";
import { TestPage } from "./pages/testPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        {/* delete later */}
        <Route path="/testPage" element={<TestPage />} /> 
      </Routes>
    </Router>
  );
}
