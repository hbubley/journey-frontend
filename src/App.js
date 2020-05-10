import React from "react";
import WelcomeDisplay from "./components/LandingPage/WelcomeDisplay";
import About from "./components/LandingPage/About";
import UserDashboard from './components/UserDashboard/UserDashboard'
import JourneySequence from "./components/JourneySequence/JourneySequence";
import StepState from "./context/user-steps/StepState";
import Steps from "./components/Steps/Steps"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <StepState>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={WelcomeDisplay} />
            <Route path="/about" component={About} />
            <Route path="/userdash" component={UserDashboard} />
            <Route path="/sequence" component={JourneySequence} />
            <Route path='/steps' component={Steps} />
          </Switch>
        </div>
      </Router>
    </StepState>
  );
}

export default App;
