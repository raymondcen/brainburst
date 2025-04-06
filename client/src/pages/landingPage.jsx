import { AuthForm } from "../components/models/signup/authForm";
import checkUserAuth from "../utils/checkUserAuth";
import { useEffect } from "react";

export const LandingPage = () => {
  useEffect(() => {
    const fetchUserAuth = async () => {
      const userAuth = await checkUserAuth();
      
      console.log(userAuth);

      if (!userAuth) return;
      window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/testPage`;
    };
    fetchUserAuth();
  }, []);
  return (
    <div>
      <AuthForm />
    </div>
  );
};

export default LandingPage;
