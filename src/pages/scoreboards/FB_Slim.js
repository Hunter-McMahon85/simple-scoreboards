import React from "react";
import "./scorecss/FB_Slim.css";

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

  const prod_img = "../../../logo192.png";
  return (
    <>
      <div className="FB_Slim_Container">
        <div className="FB_Slim_items">
          <img src={prod_img} alt="" height="56px" width="56px" />
          <h1 style={home_color}>Home Team</h1>
          <h1 className="FBscore">{H_score}</h1>

          <img src={prod_img} alt="" height="56x" width="56px"/>
          <h1 style={vis_color}>Visiting Team</h1>
          <h1 className="FBscore">{V_score}</h1>
          <h1 className="FBsit"> Quarter {Period} </h1>
          <h1 className="FBsit">{Time}</h1>
          <h1 className="FBsit">
            {Down} & {Distance}
          </h1>
        </div>
      </div>
    </>
  );
};

export default FBSlim;
