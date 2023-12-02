/*
Session_config.js
Description:
this component host a popup that lets users launch a demo scorekeeping session. 
this component saves info about a session into local storage and then opens the scorekeeper
Creation date: 10/27/2023
Inital Author: Hunter McMahon
*/
import React from "react";
import { Link } from "react-router-dom";
import "../css/dashboard.css";

function SessionStart({ onClose }) {
  const Board_Choice = (B) => {
    localStorage.setItem("ScoreboardType", B);
    localStorage.setItem("hcolor", "blue");
    localStorage.setItem("vcolor","red");
    localStorage.setItem("himage", "../../../logo192.png");
    localStorage.setItem("vimage", "../../../logo192.png");
    localStorage.setItem("hname", "Home Team");
    localStorage.setItem("vname", "Visiting Team");
  };
  return (
    <>
      <div className="SCcontain">
        <div className="SessionCreator">
          <h1>Choose A Sport</h1>
          <Link to="/myscorekeeper">
            <button className="SportPopupButton"
              onClick={() => {
                Board_Choice("Football");
              }}
            >
              Football
            </button>
          </Link>
          <Link to="/myscorekeeper">
            <button className="SportPopupButton"
              onClick={() => {
                Board_Choice("Soccer");
              }}
            >
              Soccer
            </button>
          </Link>
          <Link to="/myscorekeeper">
            <button className="SportPopupButton"
              onClick={() => {
                Board_Choice("Baseball");
              }}
            >
              Baseball
            </button>
          </Link>
          <Link to="/myscorekeeper">
            <button className="SportPopupButton"
              onClick={() => {
                Board_Choice("Basketball");
              }}
            >
              Basketball
            </button>
          </Link>
          <br></br>
          <button className="ClosePopupButton" onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}

export default SessionStart;
