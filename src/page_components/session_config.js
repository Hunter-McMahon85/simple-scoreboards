// this component is rendered when a scorekeeping session is started,
// this is where the user inputs their pre-session preferences
import React from "react";
import { Link } from "react-router-dom";
import "../css/dashboard.css";

function SessionStart({ onClose }) {
  const Board_Choice = (B) => {
    localStorage.setItem("ScoreboardType", B);
  };
  return (
    <>
      <div className="SCcontain">
        <div className="SessionCreator">
          <h1>Choose A Sport</h1>
          <Link to="/myscorekeeper">
            <button
              onClick={() => {
                Board_Choice("FBSlim");
              }}
            >
              Football
            </button>
          </Link>
          <Link to="/myscorekeeper">
            <button
              onClick={() => {
                Board_Choice("Soccer");
              }}
            >
              Soccer
            </button>
          </Link>
          <Link to="/myscorekeeper">
            <button
              onClick={() => {
                Board_Choice("Baseball");
              }}
            >
              Baseball
            </button>
          </Link>
          <br></br>
          <button onClick={onClose}>Close Component</button>
        </div>
      </div>
    </>
  );
}

export default SessionStart;
