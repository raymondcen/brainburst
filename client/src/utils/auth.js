import { supabase } from '../services/supabaseClient';

export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${import.meta.env.VITE_FRONTEND_URL}/testPage`,
    },
  });

  if (!error) {
    alert("Check your email to verify your account before logging in.");
  }
  return { data, error };
}

export async function logIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (!error  && data?.user) {
    if(data.user.email_confirmed_at){
      window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/testPage`;

    } else {
      alert("Check your email to verify your account before using.");
      await supabase.auth.signOut();
    }
  }

  return { data, error };
}