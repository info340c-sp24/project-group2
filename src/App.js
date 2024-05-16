import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MessagingPage from './pages/messaging';

function App(props) {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route path="/messaging" component={MessagingPage} />
          {/* <Route path="/calendar" component={CalendarPage} /> */}
          {/* <Route path="/media" component={MediaPage} /> */}
        </Switch>
      </div>
    </Router>
  );

  function Navigation() {
    return (
      <nav>
          <div className="container">
            <h1>Messaging</h1>
          </div>
          <Link to="/" className="upper-left">
            <span className="material-icons" aria-label="Home">
              home
            </span>
          </Link>
      </nav>
    )
  }
}

export default App;