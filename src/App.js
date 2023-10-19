import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import dashboard from "./pages/dashboard";
import landing from "./pages/home";
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={landing}></Route>
        <Route exact path="/mydashboard" Component={withAuthenticator(dashboard)}></Route>
      </Routes>
    </Router>
  );
}

export default App;
