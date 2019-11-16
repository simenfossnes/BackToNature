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
import MainSection from "./components/MainSection";

const App = props => {
  const onBoarded = true;

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <MainSection/>
      </React.Fragment>
    </Router>
  );
};

export default App;
