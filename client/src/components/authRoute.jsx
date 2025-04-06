import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { Navigate } from "react-router-dom";

export default function AuthRoute({ children }) {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user || !data.user.email_confirmed_at) {
        setUser(null);
      } else {
        setUser(data.user);
      }
      setChecking(false);
    };

    checkUser();
  }, []);

  if (checking) return null;

  return user ? children : <Navigate to="/" />;
}
