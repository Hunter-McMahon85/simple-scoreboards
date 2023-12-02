/*
App.js
Description:
react component that is loaded into index.html page in public. 
This file determines the routing behavior linking other react 
components to the web apps overall page heirachy 
Creation date:
Inital Author: Hunter McMahon
*/
// react imports
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// AWS imports
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
// html imports
import dashboard from "./pages/dashboard";
import landing from "./pages/home";
import configEditor from "./pages/configEdit";
import scorekeeper from "./pages/scorekeeper";
import scoreboard from "./pages/scoreboard";

import documentation from "./pages/documentation";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={landing}></Route>
        <Route
          exact
          path="/usingsimplescoreboards"
          Component={documentation}
        ></Route>
        <Route
          exact
          path="/mydashboard"
          Component={withAuthenticator(dashboard)}
        ></Route>
        <Route
          exact
          path="/presetcreator"
          Component={withAuthenticator(configEditor)}
        ></Route>
        <Route
          exact
          path="/myscorekeeper"
          Component={withAuthenticator(scorekeeper)}
        ></Route>
        <Route exact path="/myscoreboard" Component={scoreboard}></Route>
      </Routes>
    </Router>
  );
}

export default App;
