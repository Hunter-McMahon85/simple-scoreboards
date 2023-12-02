/*
BasketballController.js
Description:
host the basketball scorekeeper component; UI interface for controlling/updating the basketball scoreboard
Creation date:
Inital Author: Hunter McMahon
*/
import React, { useState } from "react";

const BasketScorekeeper = ({
  U_score,
  Change_Period,
  ResetTime,
  DecrementTime,
  StopClock,
  hcolor,
  vcolor,
}) => {
  const [LastScore, setLastScore] = useState(0);
  const home_color = {
    backgroundColor: hcolor,
  };
  const vis_color = {
    backgroundColor: vcolor,
  };

  const handleScoreChange = (team, amount) => {
    U_score(team, amount);
    setLastScore(amount * -1);
  };

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