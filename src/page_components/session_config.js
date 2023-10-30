// this component is rendered when a scorekeeping session is started,
// this is where the user inputs their pre-session preferences
import React from "react";
import "../css/dashboard.css";

function OpenSession() {
  window.open("/myscoreboard", "_blank");
  window.open("/myscorekeeper", "_blank");
}

function SessionStart({ onClose }) {
  return (
    <>
      <div className="SCcontain">
        <div className="SessionCreator">
          <h1>option to choose session, directly stream it etc.</h1>
          <button onClick={OpenSession}>Create Session</button>
          <button onClick={onClose}>Close Component</button>
        </div>
      </div>
    </>
  );
}

export default SessionStart;
