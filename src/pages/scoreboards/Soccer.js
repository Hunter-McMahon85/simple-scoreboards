import React from "react";
import "../../css/soccer.css";

const Soccer = ({ V_score, H_score, Period, Time}) => {
  return (
    <>
      <div className="FB_Slim_Container">
        <div className="FB_Slim_items">
          <img alt="Broadcaster Logo"></img>
          <h1> Home Score: {H_score} </h1>
          <h1> Visitor Score: {V_score} </h1>
          <h1> Quarter {Period} </h1>
          <h1> {Time}</h1>
        </div>
      </div>
    </>
  );
};

export default Soccer;