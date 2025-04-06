import { supabase } from "../services/supabaseClient";

//get data
export const getCardData = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser(); //get user id
    
    //sql query
    const { data, error } = await supabase
        .from('card')
        .select('*')
        // .eq('uid', user.id);

    //error catching
    if (error) {
        console.error('Error fetching cards:', error);
    } else {
        // console.log('Fetched cards:', data);
    }
    return data;
};

export const getAllCategory = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser(); //get user id
    
    //sql query
    const { data, error } = await supabase
        .from('card')
        .select('category', { distinct: true })

        // .eq('uid', user.id);

    //error catching
    if (error) {
        console.error('Error fetching categorys:', error);
    } else {
        // console.log('Fetched cards:', data);
    }
    return data;
};