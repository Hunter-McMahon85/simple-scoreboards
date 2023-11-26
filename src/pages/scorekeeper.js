import React from "react";
// our different score controllers
import ScoreController from "./score_controllers/scoreController";
import "../css/scorekeeper.css"

const Scorekeeper = () => {
  return (
    <>
      <div>
      <ScoreController />
      </div>
    </>
  );
};

export default Scorekeeper;
