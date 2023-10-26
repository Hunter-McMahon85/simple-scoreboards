import React from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

const dashboard = () => {
  return (
    <>
      <div className="dash_body">
        <Link to="/">
          <button onClick={signOut}>Sign Out</button>
        </Link>
        <Link to="/presetcreator">
          <button>Create Scoreboard Preset</button>
        </Link>
        <Link to="/myscorekeeper">
          <button>Start Scorekeeping Session</button>
        </Link>
      </div>
    </>
  );
};
/**/
export default dashboard;
