/*
OBS_SOS.js
Description:
This component acts as a popup that is displayed at a start of a 
session in obs to ensure users know how to add the scoreboard to obs
Creation date:
Inital Author: Hunter McMahon
*/
import React from "react";
import "../css/dashboard.css";

function StartMsg({ onClose }) {
    return (
        <>
            <div className="Soscontain">
                <div className="sos">
                    <h2>Welcome to Your Scorekeeping Session</h2>
                    <h3>
                        If this is your first time using, Be sure to do the following to add
                        the overlay to the stream:
                    </h3>
                    <ul>
                        <li>
                            In the "sources" tab, Add a new Browser source by right
                            clicking on the sources list then clicking "Add" then "Browser". Alternatively click the "+" icon in the bottom left corner of the sources
                            list and then on browser
                        </li>
                        <li>
                            Click "Create New" and put "Scoreboard" into the text box and
                            click "ok"
                        </li>
                        <li>
                            in the URL field, enter the link
                            "simplescoreboards.com/myscoreboard". Then, make sure the width
                            and height fields match your intended stream output resoultion (i.e
                            width = 1080, height = 1920 for 1080p). Also make sure that the
                            Custom CSS field is empty (OBS will automatically populate this
                            with some styles). The element you add will initially show up as
                            empty. To display your scoreboard, simply refresh the page.
                        </li>
                        <li>
                            Then, in the sources tab, right click on "scoreboard", then on
                            "transform" and then on "fit to screen" to ensure it is sized
                            correctly
                        </li>
                    </ul>
                    <p>
                        If you have already added the overlay to your stream sources, Then
                        refresh the browser source to update the overlay. To do this,
                        left-click on "scoreboard" in sources. This will bring up a grey bar
                        below the stream preview with a button to refresh the page. Clicking
                        this button will refresh the page and display your scoreboard.
                    </p>
                    <br></br>
                    <button onClick={onClose}>Start ScoreKeeping</button>
                </div>
            </div>
        </>
    );
}

export default StartMsg;
