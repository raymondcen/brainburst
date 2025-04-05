import { useState } from 'react';
import { signUp } from './auth.js';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    const { error } = await signUp(email, password);
    if (error) {
      setMessage('SIGNUP ERROR: ' + error.message);
    } else {
      setMessage('Signup successful!');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>BrainBurst Signup</h1>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
