import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FullPage from "./components/FullPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/fullpage">
            <FullPage />
          </Route>
          <Route path="/dashboard/*">
            <Dashboard />
          </Route>
          <Route exach path='/'>
            <Redirect to='/dashboard/recents/' />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
