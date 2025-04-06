import { supabase } from "../services/supabaseClient";

export const checkUserAuth = async () => {
    const { data, error } = await supabase.auth.getUser();

    if (!data || error || !data.user.email_confirmed_at) return null;

    // console.log(data.user);
    return data.user;
};

export default checkUserAuth;
