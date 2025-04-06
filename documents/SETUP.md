# Web Application Setup

## Clone the repo
- git clone https://github.com/yourusername/brainburst.git
- cd brainburst
- cd app

## Install dependencies/packages
- npm i

## Add required .env for local development
- Create a `.env` file and add:

VITE_BACKEND_URL="http://localhost:3000"

VITE_FRONTEND_URL="http://localhost:5173"

VITE_SUPABASE_URL=https://your-project.supabase.co

VITE_SUPABASE_ANON_KEY=your-anon-key

VITE_GOOGLE_AI_KEY=your-google-ai-key

## Local Development Instructions
- npm run dev
- o + enter to open website
- q + enter to stop running
