/*
basketball.js
Description:
host the basketball scoreboard overlay component
Creation date:
Inital Author: Hunter McMahon
*/
import React from "react";
import "./scorecss/FB_Slim.css";

const Basketball = ({
  V_score,
  H_score,
  Period,
  Time,
  hcolor,
  vcolor,
  himage, 
  vimage, 
  hname, 
  vname
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
          <img src={himage} alt="" height="56px" width="56px" />
          <h1 style={home_color}>{hname}</h1>
          <h1 className="FBscore">{H_score}</h1>

          <img src={vimage} alt="" height="56x" width="56px"/>
          <h1 style={vis_color}>{vname}</h1>
          <h1 className="FBscore">{V_score}</h1>
          <h1 className="FBsit"> Quarter {Period} </h1>
          <h1 className="FBsit">{Time}</h1>
        </div>
      </div>
    </>
  );
};

export default Basketball;
