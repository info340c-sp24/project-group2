import React from 'react';
<<<<<<< HEAD
import { Routes, Route, Navigate } from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 3ecfd1596181512437916f9f758658acca4dc868

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
        <Routes>
          <Route path="/*" element={<Navigate to="/homepage" />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="messaging" element={<MessagingPage />} />
          <Route path="media" element={<MediaPage />} />

        </Routes>
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