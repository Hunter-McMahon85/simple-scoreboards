// component for users choose a session to start or edit a scoreboard
import React, { useState} from "react";
import { Auth } from "aws-amplify";
import { Link, useNavigate } from "react-router-dom";
import SessionStart from "../page_components/session_config";
import SeshSetup from "../page_components/obs_instructions";
import "../css/dashboard.css";

// Function to sign out the user using AWS Amplify Auth
async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

// Dashboard functional component
const Dashboard = () => {
  // State variable to control the visibility of session start configuration
  const [ShowSessionStart, setShowSessionStart] = useState(false);
  
  // Function to open the session start configuration
  const handleopenSessionStart = () => {
    setShowSessionStart(true);
  };

  // Function to close the session start configuration
  const handleCloseSessionStart = () => {
    setShowSessionStart(false);
  };

  // Initializing variables for pop-up content and button text
  let popup = (
    <>
      {ShowSessionStart && <SeshSetup onClose={handleCloseSessionStart} />}    
    </>
  );

  let sos_buttxt = "How to Set up with OBS";

  // Checking for the presence of 'obsstudio' and updating pop-up content and button text accordingly
  if (typeof obsstudio !== "undefined") {
    popup = (
      <>
        {ShowSessionStart && <SessionStart onClose={handleCloseSessionStart} />}
      </>
    );
    sos_buttxt = "Launch a Demo Session";
  }

  // React Router hook for navigation
  const Nav = useNavigate();

  // Function to handle click on preset templates and set local storage data accordingly
  const handleClick = (t) => {
    const templates = JSON.parse(localStorage.getItem('templates'));
    const templateData = templates[t];
    if (templateData) {
      // Setting local storage items based on template data
      localStorage.setItem("ScoreboardType", templateData.sport);
      localStorage.setItem("himage", templateData.team1Image);
      localStorage.setItem("vimage", templateData.team2Image);
      localStorage.setItem("hcolor", templateData.color1);
      localStorage.setItem("vcolor", templateData.color2);
      localStorage.setItem("hname", "Home Team");
      localStorage.setItem("vname", "Vis Team");

      // Navigating to the appropriate route based on template data
      Nav('/myscorekeeper');
    } else {
      Nav('/presetcreator'); // Navigate to preset creator if template data is missing
      return;
    }
  };

  // Rendering the Dashboard component
  return (
    <>
      <div className="dash_body">
        <h1>Your Scoreboards</h1>

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
          {sos_buttxt}
        </button>

        <div className="user_presets">
          <h3>Saved Presets </h3>

          {/* add source for image within the buttons */}
          <div className="preButcontain">
            <button className="PresetTile" onClick={() => handleClick(0)}>1 sport <br/> team1 vs. team2</button>

            <button className="PresetTile" onClick={() => handleClick(1)}>2 sport <br/> team1 vs. team2</button>

            <button className="PresetTile" onClick={() => handleClick(2)}>3 sport <br/> team1 vs. team2</button>

            <button className="PresetTile" onClick={() => handleClick(3)}>4 sport <br/> team1 vs. team2</button>

            <button className="PresetTile" onClick={() => handleClick(4)}>5 sport <br/> team1 vs. team2</button>
          </div>
        </div>
      </div>
      {popup}
    </>
  );
};
export default Dashboard;