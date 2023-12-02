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
  // Initialize data, use state allows for it to be continuosly updated 

  // holds the home team score value
  const [H_score, setScoreH] = useState(0);
  // holds the vis team score value
  const [V_score, setScoreV] = useState(0);
  // holds the value for the period/quarter/half of the game
  const [Period, setPeriod] = useState(0);
  // holds the time for the scoreboards timer
  const [Time, setTime] = useState(0);
  // holds the down (for football)
  const [Down, setDown] = useState(0);
  // holdes the distance value for sports like football
  const [Distance, setDistance] = useState(0);
  // holds the amount of balls (baseball)
  const [Balls, setBalls] = useState(0);
  // holds the amount of strikes (baseball)
  const [Strikes, setStrikes] = useState(0);
  // holds the value of which team has posetion
  const [Possetion, setPossetion] = useState("");
  // holds the home team color value
  const [Hcolor, setHcolor] = useState("blue");
  // holds the vis team color value
  const [Vcolor, setVcolor] = useState("red");
  // holds the home team image/logo value
  const [Himage, setHimage] = useState("../../../logo192.png");
  // holds the vis team image/logo value
  const [Vimage, setVimage] = useState("../../../logo192.png");
  // holds the home team name value
  const [Hname, setHname] = useState("Home Team");
  // holds the vis team name value
  const [Vname, setVname] = useState("Visiting Team");

  // reload refreshes the data in local storage to update the scoreboard
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

  // gets the scoreboard type from local storage to determine which scoreboard component to render
  const ScoreType = localStorage.getItem("ScoreboardType");
  // container var for the scorecomponent
  let ScoreboardComponent;

  // this switch statement determines which score component is rendered
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
