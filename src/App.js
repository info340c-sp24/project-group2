import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MessagingPage from './pages/messaging';
import './styles/messaging.css';
import Login from './pages/login';
import Media from './pages/media';
//import './styles/login.css';
//import './styles/media.css';

function App(props) {
  return (
    <>
      <div>
        {/* <LoginPage /> */}
        {/* <HomePage /> */}
        {/* <CalendarPage /> */}
        <MessagingPage />
        {/* <MediaPage /> */}
      </div>
      <footer>
      <p>
        Copyright <span>©</span> 2024 Group 2. All rights reserved.
      </p>
      </footer>
    </>
  );
}

export default App;
