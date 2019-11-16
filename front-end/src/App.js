import React from "react";
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from "react-router-dom";
import Profile from './screens/Profile';
import Chances from "./screens/Chances";
import Feed from './screens/Feed';
import Onboarding from './components/Onboarding';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/chances">Chances</Link>
      </li>
      <li>
        <Link to="/feed">Feed</Link>
      </li>
    </ul>
  );
};

const App = props => {

  const onBoarded = true;

  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/">
            {onBoarded ? <Redirect to="/chances" /> : <Onboarding />}
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/chances">
            <Chances />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
