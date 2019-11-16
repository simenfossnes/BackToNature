import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import Profile from "./screens/Profile";
import Chances from "./screens/Chances";
import Feed from "./screens/Feed";
import Onboarding from "./components/Onboarding";
import NavMenu from "./components/NavMenu";

const App = props => {
  const onBoarded = true;

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <NavMenu />
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
