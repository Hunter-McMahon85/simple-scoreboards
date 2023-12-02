/*
scoreboard.js
Description:
this component provides a running envornment for the scoreboard elements found in the 
scoreboards directory. This also provides conditional behavior to render a desired scoreboard component
Creation date:
Inital Author: Hunter McMahon
*/
import React, { useState, useEffect } from "react";
import FBSlim from "./scoreboards/FB_Slim";
import Soccer from "./scoreboards/Soccer";
import Baseball from "./scoreboards/baseball";
import Basketball from "./scoreboards/basketball";

const Scoreboard = () => {
  // Initialize data
  const [H_score, setScoreH] = useState(0);
  const [V_score, setScoreV] = useState(0);
  const [Period, setPeriod] = useState(0);
  const [Time, setTime] = useState(0);
  const [Down, setDown] = useState(0);
  const [Distance, setDistance] = useState(0);
  const [Balls, setBalls] = useState(0);
  const [Strikes, setStrikes] = useState(0);
  const [Possetion, setPossetion] = useState("");
  const [Hcolor, setHcolor] = useState("blue");
  const [Vcolor, setVcolor] = useState("red");
  const [Himage, setHimage] = useState("../../../logo192.png");
  const [Vimage, setVimage] = useState("../../../logo192.png");
  const [Hname, setHname] = useState("Home Team");
  const [Vname, setVname] = useState("Visiting Team");

  // fetch data from controller
  const reload = () => {
    setScoreH(localStorage.getItem("H_score"));
    setScoreV(localStorage.getItem("V_score"));
    setPeriod(localStorage.getItem("Period"));
    setTime(localStorage.getItem("Time"));
    setDown(localStorage.getItem("Down"));
    setDistance(localStorage.getItem("Distance"));
    setBalls(localStorage.getItem("Balls"));
    setStrikes(localStorage.getItem("Strikes"));
    setPossetion(localStorage.getItem("Possetion"));
    setHcolor(localStorage.getItem("hcolor"))
    setVcolor(localStorage.getItem("vcolor"))
    setHimage(localStorage.getItem("himage")) 
    setVimage(localStorage.getItem("vimage"))  
    setHname(localStorage.getItem("hname")) 
    setVname(localStorage.getItem("vname")) 

  };

  // repetedly fetch to keep scoreboard updated
  useEffect(() => {
    reload();
    const interval = setInterval(reload, 1);
    // this is so if this page is used as a component the interval ends
    // when the component is closed
    return () => {
      clearInterval(interval);
    };
  }, []);

  // TODO: add conditional rendering for different templates
  const ScoreType = localStorage.getItem("ScoreboardType");
  let ScoreboardComponent;
  switch (ScoreType) {
    case "Football":
      ScoreboardComponent = (
        <FBSlim
          H_score={H_score}
          V_score={V_score}
          Period={Period}
          Time={Time}
          Down={Down}
          Distance={Distance}
          hcolor={Hcolor}
          vcolor={Vcolor}
          himage={Himage}
          vimage={Vimage}
          hname={Hname}
          vname={Vname}
        />
      );
      break;
    case "Soccer":
      ScoreboardComponent = (
        <Soccer
          H_score={H_score}
          V_score={V_score}
          Period={Period}
          Time={Time}
          hcolor={Hcolor}
          vcolor={Vcolor}
          himage={Himage}
          vimage={Vimage}
          hname={Hname}
          vname={Vname}
        />
      );
      break;
    case "Baseball":
      ScoreboardComponent = (
        <Baseball
          H_score={H_score}
          V_score={V_score}
          Period={Period}
          Down={Down}
          Balls={Balls}
          Strikes={Strikes}
          Possetion={Possetion}
          hcolor={Hcolor}
          vcolor={Vcolor}
          himage={Himage}
          vimage={Vimage}
          hname={Hname}
          vname={Vname}
        />
      );
      break;
    case "Basketball":
      ScoreboardComponent = (
        <Basketball
          H_score={H_score}
          V_score={V_score}
          Period={Period}
          Time={Time}
          hcolor={Hcolor}
          vcolor={Vcolor}
          himage={Himage}
          vimage={Vimage}
          hname={Hname}
          vname={Vname}
        />
      );
      break;
    default:
      break;
  }
  return (
    <>
      <div>{ScoreboardComponent}</div>
    </>
  );
};

export default Scoreboard;
