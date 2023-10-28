import React from "react";

const FBScorekeeper = ({ U_score, Change_Period }) => {
  return (
    <div className="FB_scorekeeper">
      <button onClick={() => Change_Period()}>Change Quarter</button>
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
