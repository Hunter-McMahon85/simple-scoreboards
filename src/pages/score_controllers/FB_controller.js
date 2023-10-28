import React from "react";

const FBScorekeeper = ({ U_score, Change_Period, ResetTime, DecrementTime, StopDecrement }) => {
  return (
    <div className="FB_scorekeeper">
      <button onClick={() => Change_Period()}>Change Quarter</button>
      <button onClick={() => ResetTime(2)}>reset clock</button>
      <button onClick={() => DecrementTime()}>run clock</button>
      <button onClick={() => StopDecrement()}>stop clock</button>
      <div className="Home">
        <button onClick={() => U_score("h", 6)}>home_td</button>
      </div>
      <div className="Away">
        <button onClick={() => U_score("v", 6)}>vis_td</button>
      </div>
    </div>
  );
};

export default FBScorekeeper;
