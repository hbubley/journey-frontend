import React from "react";
import WelcomeDisplay from "./components/LandingPage/WelcomeDisplay";
import Alerts from './components/LandingPage/Alerts'
import About from "./components/LandingPage/About";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import JourneySequence from "./components/JourneySequence/JourneySequence";
import StepState from "./context/user-steps/StepState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Steps from "./components/UserSteps/UserSteps";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <AuthState>
      <StepState>
        <AlertState>
          <Router>
            <div className="App">
              <Switch>
                <Route exact path="/" component={WelcomeDisplay} />
                <Route path="/about" component={About} />
                <Route path="/userdash" component={UserDashboard} />
                <Route path="/sequence" component={JourneySequence} />
                <Route path="/steps" component={Steps} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </StepState>
    </AuthState>
  );
}

export default App;
