import React from "react";
import { Link } from "react-router-dom";

// i think we may be able to set this up so this takes a value like a function so on click the value thats passed tells this element which scorekeeping layout to pull
// the scorekeeping layout will be the same regardless of templates, we can make a sub-folder to store them etc.
const Scorekeeper = () => {
  let H_score = 0;
  let V_score = 0;
  localStorage.setItem("H_score", H_score);
  localStorage.setItem("V_score", V_score);

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
  return (
    <>
      <div className="scorekeeper">
        <button onClick={() => U_score("h", 6)}>home_td</button>
        <button onClick={() => U_score("v", 6)}>vis_td</button>

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
