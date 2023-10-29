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
        <h1 style={{textAlign: 'center'}}>Welcome to the dashboard!</h1>
        
        <Link to="/">
          <button 
          onClick={signOut} 
          style={{color: 'white', backgroundColor: 'red', padding: '6px 20px', borderRadius: '15px',
                  cursor: 'pointer', float: 'right'}}>
            Sign Out
          </button>
        </Link>

        <Link to="/presetcreator">
          <button
          style={{color: 'black', backgroundColor: 'lightblue', padding: '6px 20px', borderRadius: '15px',
                  cursor: 'pointer'}}>
            Create Scoreboard Preset</button>
        </Link>
        
        <button onClick={handleopenSessionStart}
        style={{color: 'black', backgroundColor: 'lightgreen', padding: '6px 20px', borderRadius: '15px',
                cursor: 'pointer'}}>
          Start Scorekeeping Session
        </button>
        <div className="user_presets"
        style={{textAlign: "center"}}>
          <h3>Saved Presets (placeholder)</h3>

          {/* add source for image within the buttons */}
          <button
          style={{color: "black", backgroundColor: "white", border: '4px solid black', borderRadius: '15px',
                  width: '320px', height:'180px'}}>
            1
          </button>
          
          <button
          style={{color: "black", backgroundColor: "white", border: '4px solid black', borderRadius: '15px',
                  width: '320px', height:'180px'}}>
            2
          </button>

          <button
          style={{color: "black", backgroundColor: "white", border: '4px solid black', borderRadius: '15px',
                  width: '320px', height:'180px'}}>
            3
          </button>

        </div>

        {ShowSessionStart && <SessionStart onClose={handleCloseSessionStart} />}
      </div>
    </>
  );
};
export default Dashboard;
