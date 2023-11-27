// component for guiding users on how to set up application with OBS
import React from "react";
import "../css/dashboard.css";

function SeshSetup({ onClose }) {
  return (
    <>
      <div className="SCcontain">
        <div className="SessionCreator">
          <h1>Getting Started:</h1>
          <p>
            To get started with broadcasting, first make a preset in our preset
            editor then install Open Broadcasting Software (OBS) from here.
          </p>
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
          <h2>Beggining a Session</h2>
          <ul>
            <li>
              From our website in the OBS Dock, Click on a saved preset or on
              start session (if your presets do not appear, you may need to
              right click on the tab and click on "refresh").
            </li>
            <li>
              Then, left-click on the "scoreboard" that you added to sources.
              This will bring up a grey bar below the stream preview with a
              button to refresh the page. Clicking this button will refresh the
              page and display your scoreboard.
            </li>
          </ul>
          <p>
            With these steps complete, you are ready to broadcast using a Simple
            Scoreboards Overlay
          </p>
          <br></br>
          <button className="SObutton" onClick={onClose}>
            Back To Dashboard
          </button>
        </div>
      </div>
    </>
  );
}

export default SeshSetup;
