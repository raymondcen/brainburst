import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const supabaseUrl = process.env.SUPABASE_DB;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

//get card
router.get('/fetch', async (req, res) => {
    const {data, error} = await supabase
        .from('card')
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json({ card: data });
});

export default router;