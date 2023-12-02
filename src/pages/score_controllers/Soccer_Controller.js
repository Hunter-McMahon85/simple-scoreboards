/*
Soccer.js
Description:
host the soccer scorekeeper component; UI interface for controlling/updating the soccer scoreboard
Creation date: 10/30/23
Initial Author: Hunter McMahon
*/
import React from "react";

// The following component, SoccerScorekeeper, is a React component responsible for managing soccer game scores and time.

// Props Explanation:
// - U_score: Function to update the score of the teams (home or visitors)
// - Change_Period: Function to change the game period/half
// - ResetTime: Function to reset the game clock
// - IncrementTime: Function to start or resume the game clock
// - StopClock: Function to pause the game clock
// - hcolor: Color representing the home team
// - vcolor: Color representing the visitors team

const SoccerScorekeeper = ({
  U_score,
  Change_Period,
  ResetTime,
  IncrementTime,
  StopClock,
  hcolor,
  vcolor,
}) => {
  // Styling for home team's background color
  const home_color = {
    backgroundColor: hcolor,
  };
  // Styling for visitors team's background color
  const vis_color = {
    backgroundColor: vcolor,
  };

  // you know the drill

  return (
    <div className="scorekeeper">
      <div className="teams">
        <div className="Home" style={home_color}>
          <button onClick={() => U_score("h", 1)}>Home Goal</button>
          <button onClick={() => U_score("h", -1)}>Undo Goal</button>
        </div>
        <div className="Away" style={vis_color}>
          <button onClick={() => U_score("v", 1)}>Visitors Goal</button>
          <button onClick={() => U_score("v", -1)}>Undo Goal</button>
        </div>
      </div>

      <div className="timectrl">
        <button onClick={() => ResetTime(45, 1)}>reset clock</button>
        <button onClick={() => IncrementTime()}>run clock</button>
        <button onClick={() => StopClock()}>stop clock</button>
        <button onClick={() => Change_Period()}>Change Half</button>
      </div>
    </div>
  );
};

export default SoccerScorekeeper;
