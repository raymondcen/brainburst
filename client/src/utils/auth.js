import { supabase } from '../services/supabaseClient';

export async function signUp(email, password) {
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:5173/welcome",
    },
  });

  if (signUpError) {
    return { error: signUpError };
  }

  const user = signUpData.user;

  const { error: insertError } = await supabase.from("profiles").insert([
    {
      id: user.id,
      interests: [],
    },
  ]);

  if (insertError) {
    return { error: insertError };
  }

  return { data: signUpData };
}



export async function logIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error };
  }

  return { data };
}
