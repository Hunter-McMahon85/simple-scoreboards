import React from "react";

const SoccerScorekeeper = ({
  U_score,
  Change_Period,
  ResetTime,
  IncrementTime,
  StopClock,
}) => {
  return (
    <div className="FB_scorekeeper">
      <div className="Home">
        <button onClick={() => U_score("h", 1)}>home goal</button>
      </div>
      <div className="Away">
        <button onClick={() => U_score("v", 1)}>vis goal</button>
      </div>
      <button onClick={() => Change_Period()}>Change Half</button>
      <br></br>
      <button onClick={() => ResetTime(45, 1)}>reset clock</button>
      <button onClick={() => IncrementTime()}>run clock</button>
      <button onClick={() => StopClock()}>stop clock</button>
    </div>
  );
};

export default SoccerScorekeeper;
