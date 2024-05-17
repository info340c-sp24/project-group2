import React from 'react';
import MessagingPage from './pages/messaging';
import './styles/messaging.css';
import LoginPage from './pages/login';
import MediaPage from './pages/media';
import './styles/login.css';
import './styles/media.css';

function App(props) {
  return (
    <>
      <div>
        {/* <LoginPage /> */}
        {/* <HomePage /> */}
        {/* <CalendarPage /> */}
        {/*<MessagingPage /> */}
        <MediaPage />
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
