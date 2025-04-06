import React from 'react';
import { supabase } from '../services/supabaseClient';

export const TestPage = () => {

    
    const getCardData = async () => {
        const { data: { user }, error: userError } = await supabase.auth.getUser(); //get user id
        
        //sql query
        const { data, error } = await supabase
            .from('card')
            .select('*')
            .eq('uid', user.id);

        //error catching
        if (error) {
            console.error('Error fetching cards:', error);
        } else {
            console.log('Fetched cards:', data);
        }
    };

    return (
        <>
            <div>
                <button onClick={getCardData}>Read Cards</button>
            </div>
        </>
    );
};