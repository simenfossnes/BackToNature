import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from "./state/store/configureStore";
import { Provider } from "react-redux";
import MainSection from "./components/MainSection";
import Onboarding from "./components/Onboarding/Onboarding";
import { fetchPeopleTrafficPredictionsStart } from './state/actions/predictionActions';
import { fetchTweetsStart } from './state/actions/twitterActions';

const store = configureStore();

store.dispatch(fetchPeopleTrafficPredictionsStart());
store.dispatch(fetchTweetsStart());

const App = props => {
  const onBoarded = true;

  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <Route exact path="/">
            {onBoarded && <Onboarding />}
          </Route>
          <MainSection />
        </React.Fragment>
      </Router>
    </Provider>
  );
};

export default App;
