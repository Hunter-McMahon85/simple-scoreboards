// container component for the scoreboard pages
import React, { useState, useEffect } from "react";
//base template elements
import FBSlim from "./scoreboards/FB_Slim";
import Soccer from "./scoreboards/Soccer";
import Baseball from "./scoreboards/baseball";

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
    case "FBSlim":
      ScoreboardComponent = (
        <FBSlim
          H_score={H_score}
          V_score={V_score}
          Period={Period}
          Time={Time}
          Down={Down}
          Distance={Distance}
          hcolor={"blue"}
          vcolor={"red"}
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
          hcolor={"blue"}
          vcolor={"red"}
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
          hcolor={"blue"}
          vcolor={"red"}
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
