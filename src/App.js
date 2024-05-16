import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import MessagingPage from './pages/messaging';
import { NavBar } from './pages/messaging.js';
import './styles/messaging.css';


function App(props) {
  return (
    <Router>
      <NavBar>
        <Routes>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route path="/messaging" component={MessagingPage} />
          {/* <Route path="/calendar" component={CalendarPage} /> */}
          {/* <Route path="/media" component={MediaPage} /> */}
        </Routes>
      </NavBar>
    </Router>
  );
}


export default App;