import React, { useState, useEffect } from "react";
//base template elements
import FBSlim from "./scoreboards/FB_Slim";

const Scoreboard = () => {
  // Initialize data
  const [H_score, setScoreH] = useState(0);
  const [V_score, setScoreV] = useState(0);
  const [Period, setPeriod] = useState(0);
  const [Time, setTime] = useState(0);
  const [Down, setDown] = useState(0);
  const [Distance, setDistance] = useState(0);

  // fetch data from controller
  const reload = () => {
    setScoreH(localStorage.getItem("H_score"));
    setScoreV(localStorage.getItem("V_score"));
    setPeriod(localStorage.getItem("Period"));
    setTime(localStorage.getItem("Time"));
    setDown(localStorage.getItem("Down"));
    setDistance(localStorage.getItem("Distance"));
  };

  // repetedly fetch to keep scoreboard updated
  useEffect(() => {
    reload();
    const interval = setInterval(reload, 1);
    // this is so if this page is used as a component the setinterval closes
    //when the component is closed
    return () => {
      clearInterval(interval);
    };
  }, []);

  // TODO: add conditional rendering for different templates
  // since the following scoreboard templates go over the stream, 
  // they need to maintain an 1080p window size (to fit the broadcast window) 
  // for proper output over the broadcast and may not be responsive
  return (
    <>
      <FBSlim
        H_score={H_score}
        V_score={V_score}
        Period={Period}
        Time={Time}
        Down={Down}
        Distance={Distance}
      />
    </>
  );
};

export default Scoreboard;
