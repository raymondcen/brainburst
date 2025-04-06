import { supabase } from '../services/supabaseClient';

export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:5173/testPage",
    },
  });

  if (!error) {
    window.location.href = "http://localhost:5173/testPage";
  }
  return { data, error };
}

export async function logIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (!error && data && data.user) {
    window.location.href = "http://localhost:5173/testPage";
  }

  return { data, error };
}