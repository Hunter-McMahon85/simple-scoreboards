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


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={landing}></Route>
        <Route exact path="/learntobroadcast" Component={landing}></Route>
        <Route exact path="/usingsimplescoreboards" Component={landing}></Route>
        <Route exact path="/mydashboard" Component={withAuthenticator(dashboard)}></Route>
        <Route exact path="/overlaycreator" Component={withAuthenticator(configEditor)}></Route>
        <Route exact path="/myscorekeeper" Component={withAuthenticator(scorekeeper)}></Route>
        <Route exact path="/myscoreboard" Component={withAuthenticator(scoreboard)}></Route>
      </Routes>
    </Router>
  );
}

export default App;
