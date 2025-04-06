# BrainBurst

## BeaverHacks Spring 2025 HackaThon

## Overview

BrainBurst is a personalized educational platform meant to replace mindless scrolling and brain rot with addictive and fun learning.

With an intuitive and similar UI to existing social media platforms, BrainBurst aims to provide users with a healthier  alternative to doom scrolling and allows users to put their time into productive activities like learning.

## Features and Functionality

* **Personalized Accounts**: Persistent user accounts with secure authorization and authentication.
* **Encrypted User Data**: Ensures users can only view and manage their own data.
* **Interactive Flashcards**: Learn through engaging flashcards with multiple modes, including practice and learning modes.
* **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
* **Simple and Easy-to-Use UI**: Choose between scrolling, arrow keys, or buttons to navigate to new learning cards.
* **AI Generated Answers**: Group of answer choices generted and powered by Google's Gemini AI model to produce challenging and relative answer options for a given term or question.
* **Custom Study Categories and Cards**: Challenge yourself and add you own flashcards to study/practice for later.

## Technologies Used

* **Frontend**: React, Tailwind CSS, Swiper.js
* **Database/Backend**: Supabase
* **Authentication**: Supabase
* **Version Control**: Git & GitHub

## Installation and Setup

To install and run the project locally, consider the following steps:

1. Clone the repository: `git clone https://github.com/raymondcen/brainburst.git`
2. Create an environment file: `cd app` and add a new file called `.env`
3. Populate `.env` file: Head over to [Link](https://supabase.com/dashboard/sign-in), create a new project and gather the Supabase URL and public key. Add the following to the `.env` file; VITE_SUPABASE_URL="-your-supabase-url-"
VITE_SUPABASE_PUBLIC_KEY="-your-supabse-public-key-"
VITE_FRONTEND_URL="http://localhost:5173"
4. Install packages: `cd app; npm i`
5. Run software: `npm run dev`
6. Open link in browser

## Contributers

* Gabe Valdez
* Raymond Cen
* Ivan Wong
