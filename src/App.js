import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MessagingPage from "./messaging";

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
}

export default App;
