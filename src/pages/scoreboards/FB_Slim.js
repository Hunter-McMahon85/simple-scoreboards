import React from "react";
import "../../css/FB_Slim.css";

const FBSlim = ({
  V_score,
  H_score,
  Period,
  Time,
  Down,
  Distance,
  hcolor,
  vcolor,
}) => {
  const home_color = {
    backgroundColor: hcolor,
  };
  const vis_color = {
    backgroundColor: vcolor,
  };
  return (
    <>
      <div className="FB_Slim_Container">
        <div className="FB_Slim_items">
          <img alt="Broadcaster Logo"></img>
          <h1 style={home_color}> Home Score: {H_score} </h1>
          <h1 style={vis_color}> Visitor Score: {V_score} </h1>
          <h1> Quarter {Period} </h1>
          <h1> {Time} | </h1>
          <h1>
            {Down} & {Distance}
          </h1>
        </div>
      </div>
    </>
  );
};

export default FBSlim;
