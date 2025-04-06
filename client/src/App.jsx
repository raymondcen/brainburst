import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import TestPage from "./pages/TestPage";
import AuthRoute from "./components/authRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
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