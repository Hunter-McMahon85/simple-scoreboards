/*
documentation.js
Description:
this component holds the html for the apps documentation page
Creation date:
Inital Author: Hunter McMahon
*/
import React from "react";
import { Link } from "react-router-dom";
import "../css/documentation.css";

const documentation = () => {
  return (
    <>
      <div className="docbody">
        <Link to="/">
          <button className="homeButton">
            Home
          </button>
        </Link>
        <h1>Getting Started:</h1>
        <div className="doccontent">
          <p>
            This guide will get you set up to use simple scoreboards overlays to broadcast your sporting events
          </p>
          <h2>Pre-Requisites</h2>
          <ul>
            <li>Download and install <a href="https://obsproject.com/download" target="_blank" rel="noopener noreferrer">Open Broadcasting Software (OBS)</a></li>
            <li><Link to="/mydashboard" target="_blank" rel="noopener noreferrer">Create an account</Link> with Simple Scoreboards</li>
          </ul>
          <h2>Once Open Broadcasting Software Is installed:</h2>
          <ul>
            <li>Open obs</li>
            <li>Click "Docks" from the top bar</li>
            <li>Click "Custom Browser Docks" from the drop down menu</li>
            <li>
              Add our website into the URL field
              (www.simplescoreboards.com/mydashboard) and enter a name for it
              (*note* OBS does not care what you name it)
            </li>
            <li>
              Once you sign in, your scoreboard templates are now viewable in
              OBS and you will be able to start a scorekeeping session
            </li>
          </ul>
          <div className="ObsSetupImgContain">
            <img src="../../../InstructionImg/docks.PNG" alt="docks"></img>
            <img src="../../../InstructionImg/custbrodocks.PNG" alt="docks" ></img>
            <img src="../../../InstructionImg/name_link.PNG" alt="docks"></img>
          </div>
          <h2>Before You Broadcast</h2>
          <ul>
            <li>
              In "sources", Add a new Browser source by either right clicking on
              the sources list then clicking "Add" then "Browser" or by clicking
              the "+" icon in the bottom left corner of the sources list and
              then on browser
            </li>
            <li>
              Click "Create New" and put "Scoreboard" into the text box and
              click "ok"
            </li>
            <li>
              in the URL field, enter the link
              "simplescoreboards.com/myscoreboard". Then, make sure the width
              and heigh fields match your intended stream output resoultion (i.e
              width = 1080, height = 1920 for 1080p). Also make sure that the
              Custom CSS field is empty (OBS will automatically populate this
              with some styles). The element you add will initially show up as
              empty but do not worry as it will populate with your scoreboard at
              the start of a session.
            </li>
            <li>
              Then, in the sources tab, right click on "scoreboard", then on
              "transform" and then on "fit to screen" to ensure it is sized
              correctly
            </li>
          </ul>
          <div className="ObsSetupImgContain">
            <img src="../../../InstructionImg/sources.PNG" alt="docks"></img>
            <img src="../../../InstructionImg/sourceselect.PNG" alt="docks" ></img>
            <img src="../../../InstructionImg/sourceadd.PNG" alt="docks"></img>
          </div>
          <div className="source_images"></div>
          <h2>Beggining a Session</h2>
          <ul>
            <li>
              From our website in the OBS Dock, Click on a saved preset
            </li>
            <li>
              Then, left-click on the "scoreboard" that you added to sources.
              This will bring up a grey bar below the stream preview with a
              button to refresh the page. Clicking this button will refresh the
              page and display your scoreboard.
            </li>
          </ul>
          <img src="../../../InstructionImg/refresh.PNG" alt="docks"></img>
          <p>
            With these steps complete, you are ready to broadcast using a Simple
            Scoreboards Overlay
          </p>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default documentation;
