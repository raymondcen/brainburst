import React from 'react';
import axios from 'axios';

export const TestPage = () => {

    const getCardData = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/fetch`
            );
            console.log('Fetched cards:', response.data.card);
        } catch (error) {
            console.error('Read error:', error);
        }
    };



    return (
        <>
            <div>
                <button onClick={getCardData}>Read</button>
            </div>
        </>
    );
};