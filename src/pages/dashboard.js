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
          style={{color: 'white', backgroundColor: 'red', padding: '6px 20px', borderRadius: '20px',
                  cursor: 'pointer', float: 'right'}}>
            Sign Out
          </button>
        </Link>
        
        <Link to="/presetcreator">
          <button
          style={{color: 'black', backgroundColor: 'lightblue', padding: '6px 20px', borderRadius: '20px',
          cursor: 'pointer', display: "block"}}>
            Create Scoreboard Preset</button>
        </Link>
        
        <button onClick={handleopenSessionStart}
        style={{color: 'black', backgroundColor: 'lightgreen', padding: '6px 20px', borderRadius: '20px',
        cursor: 'pointer'}}>
          Start Scorekeeping Session
        </button>

        {ShowSessionStart && <SessionStart onClose={handleCloseSessionStart} />}
      </div>
    </>
  );
};
export default Dashboard;
