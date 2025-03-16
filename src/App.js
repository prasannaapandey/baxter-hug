import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from "./MainPage/Dashboard";
import MoreInfo from "./MoreInfo/Dashboard";
import HugHistory from "./HugHistory/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/more-info" component={MoreInfo} />
        <Route path="/hug-history" component={HugHistory} />
      </Switch>
    </Router>
  );
}

export default App;
