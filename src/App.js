import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import LoginPage from './pages/login';
import './styles/login.css';

import HomePage from './pages/homepage';
import './styles/homepage.css';

import ProfilePopUp from './pages/profilepopup';
import './styles/profilepopup.css';

import CalendarPage from './pages/calendar';
import './styles/calendar.css';

import MessagingPage from './pages/messaging';
import './styles/messaging.css';

import MediaPage from './pages/media';
import './styles/media.css';

function App() {
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear user session or perform other sign-out logic
    setUser(null);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    /*<>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="login" element={<LoginPage {...loginProps} />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="messaging" element={<MessagingPage />} />
          <Route path="media" element={<MediaPage />} />
        </Routes>
      </div>
      <footer>
        <p>Copyright <span>&copy;</span> 2024. All rights reserved.</p>
      </footer>
    </> */

    <>
      <div className="App">
        <nav>
          <h1>RSO Communication Platform</h1>
          {/* Pass user and onSignOut function as props to ProfilePopUp */}
          <ProfilePopUp user={user} onSignOut={handleSignOut} isOpen={isProfileOpen} toggleProfile={toggleProfile} />
        </nav>
        <Routes>
          {/*<Route path="/" element={<Navigate to="/login" />} /> */}
          {/* <Route path="/" element={navigate('/login')} /> */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/messaging" element={<MessagingPage />} />
          <Route path="/media" element={<MediaPage />} />
        </Routes>
        <footer>
          <p>Copyright <span>&copy;</span> 2024. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;

