import React from 'react';
import '../styles/login.css';

function Login({ title, subtitle }) {
  return (
    <div>
      <Header title={title} />
      <main>
        <div className="login-container">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;

function Header({ title }) {
  return (
    <header>
      <div className="header-container">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

function LoginForm() {
  return (
    <form action="/homepage" method="POST">
      <label htmlFor="username">UW Net ID:</label>
      <input type="text" id="username" name="username" required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <button type="submit" className="login-btn">Login</button>
    </form>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright © 2024. All rights reserved.</p>
    </footer>
  );
}



