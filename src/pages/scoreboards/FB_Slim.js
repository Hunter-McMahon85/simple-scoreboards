import React from "react";

const FBSlim = ({ V_score, H_score, Period }) => {
  return (
    <>
      <img alt="Broadcaster Logo"></img>
      <h1>Visitor Score: {V_score}</h1>
      <h1>Home Score: {H_score}</h1>
      <h1>Quarter {Period}</h1>
      <h1>time</h1>
      <h1>down and distance</h1>
    </>
  );
};

export default FBSlim;



