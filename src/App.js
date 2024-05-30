import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MessagingPage from './pages/messaging';
import './styles/messaging.css';

import HomePage from './pages/homepage';
import './styles/homepage.css';

import LoginPage from './pages/login';
import './styles/login.css';

import MediaPage from './pages/media';
import './styles/media.css';

import CalendarPage from './pages/calendar';
import './styles/calendar.css';

function App() {
  const loginProps = {
    title: 'RSO Communication Platform',
    subtitle: 'Please login with your UW Net ID',
  };

  const mediaProps = {
    recentUploads: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    olderFiles: ['Winter 2023', 'Spring 2023', 'Fall 2023', 'Winter 2024'],
  };

  return (
    <>
      <div>
        {/* <LoginPage /> */}
        {/* <HomePage /> */}
        {/* <CalendarPage /> */}
        {/* <MessagingPage /> */}
        {/* <MediaPage /> */}
        <MediaPage /> 
      </div>
      <footer>
      <p>Copyright <span>&copy;</span> 2024. All rights reserved.</p>
      </footer>
     </>
  );
}

export default App;