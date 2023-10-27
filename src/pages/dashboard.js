import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import SessionStart from "../page_components/session_config";

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

const Dashboard = () => {
  const [ShowSessionStart, setShowSessionStart] = useState(false);

  const handleopenSessionStart = () => {
    setShowSessionStart(true);
  };

  const handleCloseSessionStart = () => {
    setShowSessionStart(false);
  };

  return (
    <>
      <div className="dash_body">
        <Link to="/">
          <button onClick={signOut}>Sign Out</button>
        </Link>
        <Link to="/presetcreator">
          <button>Create Scoreboard Preset</button>
        </Link>
        
        <button onClick={handleopenSessionStart}>
          Start Scorekeeping Session
        </button>
        {ShowSessionStart && <SessionStart onClose={handleCloseSessionStart} />}
      </div>
    </>
  );
};
export default Dashboard;
