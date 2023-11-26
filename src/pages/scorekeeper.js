// this page exist for future experimentation for directly streaming to 
// youtube from web browser, such functionality was out of scope for the course
import React from "react";
import ScoreController from "./score_controllers/scoreController";
import "../css/scorekeeper.css"

const Scorekeeper = () => {
  return (
    <>
      <ScoreController/>
    </>
  );
};

export default Scorekeeper;
