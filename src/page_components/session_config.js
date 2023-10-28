// this component is rendered when a scorekeeping session is started,
// this is where the user inputs their pre-session preferences
import React from "react";

function OpenSession() {
  window.open("/myscoreboard", "_blank");
  window.open("/myscorekeeper", "_blank");
}

function SessionStart({ onClose }) {
  return (
    <>
      <div>
        <h1>option to choose session, directly stream it etc.</h1>
        <button onClick={OpenSession}>Create Session</button>
        <button onClick={onClose}>Close Component</button>
      </div>
    </>
  );
}

export default SessionStart;
