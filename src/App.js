import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MessagingPage from './pages/messaging';
import './styles/messaging.css';
import LoginPage from './pages/login';
import MediaPage from './pages/media';
import './styles/login.css';
import './styles/media.css';

function App(props) {
  return (
    <div>
      {/* LoginPage /> */}
      {/* <HomePage /> */}
      {/* <CalendarPage /> */}
      {/* <MessagingPage /> */}
      <MediaPage />
    </div>
  );
}

export default App;
