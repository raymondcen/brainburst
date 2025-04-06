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
    const { data, error } = await supabase.rpc('get_distinct_categories')
    //sql query


    //error catching
    if (error) {
        console.error('Error fetching categorys:', error);
    } else {
        // console.log('Fetched cards:', data);
    }
    return data;
};

export const addCard = async (newCard) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser(); //get user id

    //sql query
    const { data, error } = await supabase
        .from('card')
        .insert({ category: newCard.category, term: newCard.term, def: newCard.def, uid: user.id })
    // .eq('uid', user.id);

    //error catching
    if (error) {
        console.error('Error ad card:', userError);
    } else {
        // console.log('Fetched cards:', data);
    }
}


export const getCardCount = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser(); //get user id
    //sql query
    const { data, error } = await supabase
        .from('card')
        .select('*', { count: 'exact' })        // .eq('uid', user.id);

    //error catching
    if (error) {
        console.error('Error getting row count:', userError);
    } else {
        // console.log('Fetched cards:', data);
    }
    return data
}

export const deleteCard = async (cardId) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser(); //get user id

    //sql query
    const { data, error } = await supabase
        .from('card')
        .delete()
        .eq('cid', cardId)
    // .eq('uid', user.id);

    //error catching
    if (error) {
        console.error('Error deleting card:', error);
    } else {
        console.log('Deleted card:', data);
    }
    return data;
};

export const updateCard = async (cardId, updatedCard) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    const { data, error } = await supabase
        .from('card')
        .update(updatedCard)
        .eq('cid', cardId);

    if (error) {
        console.error('Error updating card:', error);
    } else {
        console.log('Updated card:', data);
    }
    return data;
};


