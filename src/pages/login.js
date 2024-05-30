import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/login.css';

function LoginPage({ title, subtitle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Logged in as:', user);
        setError(''); // Clear any previous error
        // Redirect to homepage or other page
        window.location.href = '/homepage'; // Change this to your desired route
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setError('Invalid login credentials');
      });
  };

  return (
    <div>
      <header>
        <div className="header-container">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </header>
      <main>
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn">Login</button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </main>
      <footer>
        <p>Copyright © 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LoginPage;





