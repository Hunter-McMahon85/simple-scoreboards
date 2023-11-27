// component for users choose a session to start or edit a scoreboard
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import SessionStart from "../page_components/session_config";
import SeshSetup from "../page_components/obs_instructions";
import "../css/dashboard.css";

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

  let popup = (
    <>
      {ShowSessionStart && <SeshSetup onClose={handleCloseSessionStart} />}
      {ShowSessionStart && <SessionStart onClose={handleCloseSessionStart} />}
    </>
  );
  if (typeof obsstudio !== "undefined") {
    popup = (
      <>
        {ShowSessionStart && <SessionStart onClose={handleCloseSessionStart} />}
      </>
    );
  }

  return (
    <>
      <div className="dash_body">
        <h1>Welcome to the dashboard!</h1>

        <Link to="/">
          <button onClick={signOut} className="SObutton">
            Sign Out
          </button>
        </Link>

        <Link to="/presetcreator">
          <button className="PresetCreatorButton" title="Create a new template preset">
            New Preset
          </button>
        </Link>

        <button onClick={handleopenSessionStart} className="StartSessionButton"
         title="Start a scorekeeping session">
          Start Session
        </button>

        <div className="user_presets">
          <h3>Saved Presets (Database not active)</h3>

          {/* add source for image within the buttons */}
          <button className="PresetTile">1</button>

          <button className="PresetTile">2</button>

          <button className="PresetTile">3</button>
        </div>
      </div>
      {popup}
    </>
  );
};
export default Dashboard;
