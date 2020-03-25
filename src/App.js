import React from 'react';


import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>


      </div>
    </Router>

  );
}

export default App;
