import React, { useState } from 'react';
import { auth } from '../firebase';
import '../styles/login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Redirect to homepage or any other page after successful login
      window.location.href = '/homepage';
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <label htmlFor="email">UW Net ID:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="error">{error}</p>}

            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;

function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>RSO Communication Platform</h1>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright © 2024. All rights reserved.</p>
    </footer>
  );
}




