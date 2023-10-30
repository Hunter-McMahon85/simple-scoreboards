import React, { useState } from "react";

const FBScorekeeper = ({
  U_score,
  Change_Period,
  ResetTime,
  DecrementTime,
  StopClock,
  DefDown,
  DefDistance,
}) => {
  const [DistIn, setDistIn] = useState("");

  const handleDistIn = (event) => {
    setDistIn(event.target.value);
  };
  return (
    <div className="FB_scorekeeper">
      <div className="Home">
        <button onClick={() => U_score("h", 6)}>home_td</button>
      </div>
      <div className="Away">
        <button onClick={() => U_score("v", 6)}>vis_td</button>
      </div>
      <button onClick={() => Change_Period()}>Change Quarter</button>
      <br></br>
      <button onClick={() => ResetTime(15, -1)}>reset clock</button>
      <button onClick={() => DecrementTime()}>run clock</button>
      <button onClick={() => StopClock()}>stop clock</button>
      <br></br>
      <button onClick={() => DefDown("1st")}>1st Down</button>
      <button onClick={() => DefDown("2nd")}>2rd Down</button>
      <button onClick={() => DefDown("3rd")}>3rd Down</button>
      <button onClick={() => DefDown("4th")}>4th Down</button>
      <br></br>
      <input type="text" value={DistIn} onChange={handleDistIn}></input>
      <button onClick={() => DefDistance(DistIn)}>Change Distance</button>
    </div>
  );
};

export default FBScorekeeper;
