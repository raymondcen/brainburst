import { AuthForm } from "../components/models/signup/authForm";
import { About } from "../components/models/about/about";
import checkUserAuth from "../utils/checkUserAuth";
import { useEffect } from "react";

export const LandingPage = () => {
  useEffect(() => {
    const fetchUserAuth = async () => {
      const userAuth = await checkUserAuth();
      
      if (!userAuth) return;
      window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/userPage`;
    };
    fetchUserAuth();
  }, []);
  return (
    <div className="flex flex-row">
      <About/>
      <AuthForm />
    </div>
  );
};

export default LandingPage;
