import React from 'react';
import WelcomeDisplay from './components/LandingPage/Auth/WelcomeDisplay';
import StepState from './context/user-steps/StepState'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
  <StepState>
  <Router>
    <div className="App">
      <Switch>
        <Route  />
        <Route />
      </Switch>
    </div>
  </Router>
  </StepState>
  );
}

export default App;
