// this component is rendered when a scorekeeping session is started,
// this is where the user inputs their pre-session preferences
import React from "react";
import "../css/dashboard.css";

function SessionStart({ onClose }) {
  const OpenSession = () => {
    window.open("/myscoreboard", "_blank");
    window.open("/myscorekeeper", "_blank");
  };

  const Board_Choice = (B) => {
    localStorage.setItem("ScoreboardType", B);
  };
  return (
    <>
      <div className="SCcontain">
        <div className="SessionCreator">
          <h1>Choose A Sport</h1>
          <button
            onClick={() => {
              Board_Choice("FBSlim");
              OpenSession();
            }}
          >
            Football
          </button>
          <button
            onClick={() => {
              Board_Choice("Soccer");
              OpenSession();
            }}
          >
            Soccer
          </button>
          <br></br>
          <button onClick={onClose}>Close Component</button>
        </div>
      </div>
    </>
  );
}

export default SessionStart;
