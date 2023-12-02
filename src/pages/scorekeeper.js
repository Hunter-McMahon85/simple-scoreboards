/*
Scorekeeper.js
Description:
This page wraps the score controller components and will eventually handle conditional 
behavior for streaming directly from browser(work in progress)
Creation date:
Inital Author: Hunter McMahon
*/
import React, { useState } from "react";
import ScoreController from "./score_controllers/scoreController";
import StartMsg from "../page_components/obs_SOS";
import "../css/scorekeeper.css";

const Scorekeeper = () => {
  const [ShowStartMSG, setShowStartMSG] = useState(true);

  const handleCloseMSG = () => {
    setShowStartMSG(false);
  };
  return (
    <>
      <ScoreController />
      {ShowStartMSG && <StartMsg onClose={handleCloseMSG} />}
    </>
  );
};

export default Scorekeeper;
