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
      .then(() => {
        console.log('Logged in successfully');
        setError(''); 
        window.location.href = '/homepage'; 
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
          <h1>RSO Communication Platform</h1>
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
              placeholder="nkanna@uw.edu"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="RSOManagement"
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








