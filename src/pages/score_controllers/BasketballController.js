/*
BasketballController.js
Description:
host the basketball scorekeeper component; UI interface for controlling/updating the basketball scoreboard
Creation date: 12/01/23
Initial Author: Hunter McMahon
*/
import React, { useState } from "react";
// gonna

// BasketScorekeeper component for managing basketball scores and time
const BasketScorekeeper = ({
  U_score,
  Change_Period,
  ResetTime,
  DecrementTime,
  StopClock,
  hcolor,
  vcolor,
}) => {
  // State to keep track of the last scored points for undo functionality
  const [LastScore, setLastScore] = useState(0);

  // Styles for home and visiting team colors
  const home_color = {
    backgroundColor: hcolor,
  };
  const vis_color = {
    backgroundColor: vcolor,
  };

  // Function to handle changes in score for a team and update last scored points
  const handleScoreChange = (team, amount) => {
    U_score(team, amount);
    setLastScore(amount * -1);
  };

  // Render the UI for managing scores and time
  return (
    <div className="scorekeeper">
      <div className="teams">
        <div className="Home" style={home_color}>
          <button onClick={() => handleScoreChange("h", 3)}>
            3pts
          </button>
          <button onClick={() => handleScoreChange("h", 2)}>
            2pts 
          </button>
          <button onClick={() => handleScoreChange("h", 1)}>
            1pts
          </button>
          <button onClick={() => U_score("h", LastScore)}>
            Undo Last Home Score
          </button>
        </div>
        <div className="Away" style={vis_color}>
          <button onClick={() => handleScoreChange("v", 3)}>
            3pts 
          </button>
          <button onClick={() => handleScoreChange("v", 2)}>
            2pts 
          </button>
          <button onClick={() => handleScoreChange("v", 1)}>
            1pts 
          </button>
          <button onClick={() => U_score("v", LastScore)}>
            Undo Last Vis Score
          </button>
        </div>
      </div>
      <div className="timectrl">
        <button onClick={() => Change_Period()}>Change Quarter</button>
        <button onClick={() => ResetTime(15, -1)}>Reset Clock</button>
        <button onClick={() => DecrementTime()}>Run Clock</button>
        <button onClick={() => StopClock()}>Stop Clock</button>
      </div>
      <br></br>
    </div>
  );
};

export default BasketScorekeeper;