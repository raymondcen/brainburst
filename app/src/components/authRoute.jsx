import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import checkUserAuth from "../utils/checkUserAuth";

export default function AuthRoute({ children }) {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const fetchUserAuth = async () => {
      const userAuth = await checkUserAuth();
      if (!userAuth) {
        setUser(null);
      }
      setUser(userAuth);
      setChecking(false);
    };
    fetchUserAuth();
  }, []);

  if (checking) return null;

  return user ? children : <Navigate to="/" />;
}
