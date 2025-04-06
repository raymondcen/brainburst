import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/models/signup/authForm"
import TestPage from "./pages/TestPage";
import AuthRoute from "./components/authRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route
          path="/testPage"
          element={
            <AuthRoute>
              <TestPage />
            </AuthRoute>
          }
        />
        {/* Add other protected routes the same way */}
      </Routes>
    </Router>
  );
}

export default App;