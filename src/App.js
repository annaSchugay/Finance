import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Home from './pages/home'
import About from './pages/notes'
import Dashboard from './pages/statistic'

export default function App() {
  return (
    <Router>
      <div className="ui menu">
        <Link className="active item" to="/">Home</Link>
        <Link className="item" to="/about">Notes</Link>
        <Link className="item" to="/dashboard">Statistic</Link>
      </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/notes">
            <About />
          </Route>
          <Route path="/statistic">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
