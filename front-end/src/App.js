import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
import Onboarding from "./components/Onboarding/Onboarding";

const App = props => {

  const onBoarded = true;

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <Route exact path="/">
          { onBoarded && <Onboarding/> }
        </Route>
        <MainSection/>
      </React.Fragment>
    </Router>
  );
};

export default App;
