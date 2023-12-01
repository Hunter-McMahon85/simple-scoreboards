// this page exist for future experimentation for directly streaming to 
// youtube from web browser, such functionality was out of scope for the course
import React, { useState } from "react";
import ScoreController from "./score_controllers/scoreController";
import StartMsg from "../page_components/obs_SOS";
import "../css/scorekeeper.css"

const Scorekeeper = () => {
  const [ShowStartMSG, setShowStartMSG] = useState(true);

  const handleCloseMSG = () => {
    setShowStartMSG(false);
  };
  return (
    <>
      <ScoreController/>
      {ShowStartMSG && <StartMsg onClose={handleCloseMSG} />}
    </>
  );
};

export default Scorekeeper;
   
