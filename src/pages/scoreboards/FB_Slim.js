import React from "react";
import "../../css/FB_Slim.css";

const FBSlim = ({ V_score, H_score, Period, Time, Down, Distance }) => {
  return (
    <>
      <div className="FB_Slim_Container">
        <div className="FB_Slim_items">
          <img alt="Broadcaster Logo"></img>
          <h1> Home Score: {H_score} </h1>
          <h1> Visitor Score: {V_score} </h1>
          <h1> Quarter {Period} </h1>
          <h1> {Time} </h1>
          <h1>
            {Down} & {Distance}
          </h1>
        </div>
      </div>
    </>
  );
};

export default FBSlim;
