# Web Application Setup

## 1. Clone the repo
- git clone https://github.com/yourusername/brainburst.git
- cd brainburst
- cd app

## 2. Install dependencies/packages
- npm i

## 3. Setting up the Supabase databsae

### a. Create a Supabase Project

- Go to https://supabase.com
- Log in and click "New Project"
- Choose a name, password, and region

### b. Create Tables
- Using the Supabase dashboard → Table Editor, or
- Using the SQL Editor, paste:
  ```bash
  create table flashcards (
  id uuid default uuid_generate_v4() primary key,
  term text not null,
  definition text not null,
  created_at timestamp with time zone default timezone('utc', now()),
  user_id uuid
  );
  ```
### c. Enable Authentication
- Go to Authentication > Settings
- Enable Email/Password Sign-in
- Copy your Project URL and Anon Public Key


## 4. Add required .env for local development
- Create a `.env` file and add:
    ```bash
  VITE_BACKEND_URL="http://localhost:3000"
  VITE_FRONTEND_URL="http://localhost:5173"
  VITE_SUPABASE_URL=https://your-project.supabase.co
  VITE_SUPABASE_ANON_KEY=your-anon-key
  VITE_GOOGLE_AI_KEY=your-google-ai-key
  ```
## 5. Local Development Instructions
- npm run dev
- o + enter to open website
- q + enter to stop running
