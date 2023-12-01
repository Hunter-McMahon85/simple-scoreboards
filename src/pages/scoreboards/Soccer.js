import React from "react";
import "./scorecss/soccer.css";

const Soccer = ({ 
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
      <div className="soccer_Container">
        <div className="soccer_items">
          <img src={himage} alt="" width="130" height="130" />
          <h1 className="team" style={home_color}>{hname}</h1>
          <h1 className="score"> {H_score} </h1>
          <div className="soccer_middle">
            <h1> Half {Period} </h1>
            <h1> {Time} </h1>
          </div>
          <h1 className="score"> {V_score} </h1>
          <h1 className="team" style={vis_color}>{vname}</h1>
          <img src={vimage} alt="" width="130" height="130" />
        </div>
      </div>
    </>
  );
};

export default Soccer;
