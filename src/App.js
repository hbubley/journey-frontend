import React from "react";
import WelcomeDisplay from "./components/LandingPage/Auth/WelcomeDisplay";
import About from "./components/LandingPage/About";
import JourneySequence from "./components/JourneySequence/JourneySequence";
import StepState from "./context/user-steps/StepState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <StepState>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={WelcomeDisplay} />
            <Route path="/about" component={About} />
            <Route path="/sequence" component={JourneySequence} />
          </Switch>
        </div>
      </Router>
    </StepState>
  );
}

export default App;
