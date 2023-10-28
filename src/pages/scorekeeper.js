import React from "react";
import { Link } from "react-router-dom";
// our different score controllers
import FBScorekeeper from "./score_controllers/FB_controller";

// i think we may be able to set this up so this takes a value like a function so on click the value thats passed tells this element which scorekeeping layout to pull
// the scorekeeping layout will be the same regardless of templates, we can make a sub-folder to store them etc.
const Scorekeeper = () => {
  let H_score = 0;
  let V_score = 0;

  localStorage.setItem("H_score", H_score);
  localStorage.setItem("V_score", V_score);
  //for tracking what quarter, inning, period etc. 
  let Period = 1;
  localStorage.setItem("Period", Period);

  function U_score(team, n) {
    if (team === "h") {
      H_score += n;
      localStorage.setItem("H_score", H_score);
    }
    if (team === "v") {
      V_score += n;
      localStorage.setItem("V_score", V_score);
    }
  }

  // period has a different value per sport. 
  // Ie bottom/top innings in baseball etc.
  // takes sting input, not user accessible
  function Change_Period() {
    Period += 1;
    localStorage.setItem("Period", Period);
  }

  return (
    <>
      <div className="scorekeeper">
        <FBScorekeeper U_score={U_score} Change_Period={Change_Period}/>
        <p>
          <br></br>
        </p>
        <Link to="/myscoreboard">
          <button>go to scoreboard</button>
        </Link>
        <Link to="/mydashboard">
          <button>End Session</button>
        </Link>
      </div>
    </>
  );
};

export default Scorekeeper;
