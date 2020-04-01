import React from 'react';


import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Show from './components/SideBar/Show';
import OtherShow from './components/SideBar/SidebarExample'
import Example from './components/SideBar/Sibling';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>


      </div>
    </Router>

  );
}

export default App;
