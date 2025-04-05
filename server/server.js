import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: process.env.CORS_FRONTEND_URL,
};

app.use(cors(corsOptions));

export default app;
