import { supabase } from './services/supabaseClient'

export async function signUp(email, password) {
  // User sign up
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'http://localhost:5173/welcome',
      },
    });
    
    if (error) {
      return { error };
    }

    // Insert the user
    const user =  data.user;

    const { error: insertError } = await supabase.from('users').insert([
      {
        uid: user.id,
        interests: [],
      },
    ]);

    if(insertError){
      return { error: insertError };
    }

    return { data };
  }

 