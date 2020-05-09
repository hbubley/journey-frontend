import React from 'react';
import WelcomeDisplay from './components/LandingPage/Auth/WelcomeDisplay';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
  <Router>
    <div className="App">
      <Switch>
        <Route>
          <WelcomeDisplay />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
