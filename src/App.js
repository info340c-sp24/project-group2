import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MessagingPage from './pages/messaging';
import './styles/messaging.css';
import Login from './pages/login';
import Media from './pages/media';
import './styles/login.css';
import './styles/media.css';

<<<<<<< HEAD
function App(props) {
=======
function App() {
  const loginProps = {
    title: 'RSO Communication Platform',
    subtitle: 'Please login with your UW Net ID',
  };

  const mediaProps = {
    recentUploads: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    olderFiles: ['Winter 2023', 'Spring 2023', 'Fall 2023', 'Winter 2024'],
  };

>>>>>>> 7361b1b2ab335390af03e875e21f6b80ee20a129
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login {...loginProps} />} />
        <Route path="/messaging" element={<MessagingPage />} />
        <Route path="/media" element={<Media {...mediaProps} />} />
        {/* You can add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
