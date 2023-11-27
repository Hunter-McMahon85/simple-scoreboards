import React from "react";
import "./scorecss/soccer.css";

const Soccer = ({ V_score, H_score, Period, Time, hcolor, vcolor }) => {
  const home_color = {
    backgroundColor: hcolor,
  };

  const vis_color = {
    backgroundColor: vcolor,
  };
  return (
    <>
      <div className="soccer_Container">
        <div className="soccer_items">
          <h1 className="team" style={home_color}>home</h1>
          <h1 className="score"> {H_score} </h1>
          <div className="soccer_middle">
            <img alt="Broadcaster Logo"></img>
            <h1> Half {Period} </h1>
            <h1> {Time} </h1>
          </div>
          <h1 className="score"> {V_score} </h1>
          <h1 className="team" style={vis_color}>Visitor</h1>
        </div>
      </div>
    </>
  );
};

export default Soccer;
