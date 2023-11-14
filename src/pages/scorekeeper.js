import React from "react";
// our different score controllers
import ScoreController from "./score_controllers/scoreController";
import Broadcast from "../page_components/browserStream";

const Scorekeeper = () => {
  // check if we are docked to obs, determine which controller interface to bring up
  let controller = (
    <>
      <Broadcast />
      <ScoreController />
    </>
  );
  if (typeof obsstudio !== "undefined") {
    controller = (
      <>
        <ScoreController />
      </>
    );
  }

  return (
    <>
      <div>
        {controller}
      </div>
    </>
  );
};

export default Scorekeeper;
