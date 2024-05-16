import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import MessagingPage from './pages/messaging';
import { NavBar } from './pages/messaging.js';
import './styles/messaging.css';


function App(props) {
  return (
    <div>
      {/* <HomePage /> */}
      {/* LoginPage /> */}
      {/* CalendarPage /> */}
      <MessagingPage />
      {/* MediaPage /> */}
      </div>
  );
}


export default App;