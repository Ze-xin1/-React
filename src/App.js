import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./page/login/login";
import Admin from "./page/admin/admin";

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/login" component={Login}/>
         <Route path="/admin" component={Admin}/>
      </Switch>
     
    </Router>
  )
}

export default App;
