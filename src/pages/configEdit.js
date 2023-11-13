// component where users can customize their scoreboards
import React, { useState } from "react";
import { Button, View, Card } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import "../css/configEdit.css";
import { Menu, MenuItem, MenuButton } from '@aws-amplify/ui-react';
import FBSlim from "./scoreboards/FB_Slim";
import Soccer from "./scoreboards/Soccer";

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

const ConfigEditor = () => {
  // Variables for setting and getting the two images, two colors, and sport the user will choose
  // probably more cases I need to consider 
  const [team1Image, setTeam1Image] = useState(null);
  const [team2Image, setTeam2Image] = useState(null);
  const [color1, setColor1] = useState("#90ee90");
  const [color2, setColor2] = useState("#90ee90");  
  const [selectedSport, setSelectedSport] = useState("Choose a sport");
  const [selectedTemplate, setSelectedTemplate] = useState("Saved Template");
  const [SBComponent, setSBComponent] = useState("Pick a sport above to get started");

  const handleSportSelection = (sport) => {
    setSelectedSport(sport);
    switch (sport) {
      case "Football":
        setSBComponent(
          <FBSlim
            H_score={10}
            V_score={10}
            Period={1}
            Time={"15:00"}
            Down={"1st"}
            Distance={10}
            hcolor={color1}
            vcolor={color2}
          />
        );
        break;
      case "Soccer":
        setSBComponent(
          <Soccer
            H_score={10}
            V_score={10}
            Period={1}
            Time={"00:00"}
            hcolor={color1}
            vcolor={color2}
          />
        );
        break;
      default:
        break;
    } 
  };

  const handleTemplateSelection = (temp) => {
    setSelectedTemplate(temp);
  };

  const ColorChange1 = (event) => {
    setColor1(event.target.value);
    handleSportSelection(selectedSport);
  };

  const ColorChange2 = (event) => {
    setColor2(event.target.value);
    handleSportSelection(selectedSport);
  };

  const SaveTemplate = () => {
    //something with database stuffss will eventually go here
  };

  
  const handleImageUpload = (event, setImage, teamNum) => {
    const file = event.target.files[0];
    const img = new Image();
    img.onload = () => {
      // Completely forgot what size we said to restrict the image to.
      if (img.width > 256 || img.height > 256) {
        alert("Image dimensions must be 256x256 pixels or smaller.");
        event.target.value = null;
      } else {
        setImage(file);
      }
    };
    img.src = URL.createObjectURL(file);
    const fileInput = document.getElementById(`team${teamNum}ImageInput`);
    fileInput.previousSibling.textContent = file.name; // Changes the text of the button to the file name
  };

  const handleFileUploadClick = (teamNum) => {
    document.getElementById(`team${teamNum}ImageInput`).click();
  };
  
  // Slight modification to Hunters function to allow color changes


// Spagehtti Code Incoming
  return (
    <View className="App">
      <Card>
        <h1>Template Editor</h1>
      </Card>

      <div className="ButtonContainer">
        <Link to="/mydashboard">
          <Button className="homeButton">Home</Button>
        </Link>
        <Button className="signout" onClick={signOut}>Sign Out</Button>
      </div>

      <div className="Sidebar">
        {/* Two colors */}
        <input className="colorPicker" type="color" value={color1} onChange={ColorChange1} />
        <input className="colorPicker" type="color" value={color2} onChange={ColorChange2} />

        {/* Button press to upload the user image for the teams */}
        {/* Temporarily displaying it in the bottom corners */}
        <input
          id="team1ImageInput"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => handleImageUpload(e, setTeam1Image, 1)}
        />
        <button className="fileUploads" onClick={() => handleFileUploadClick(1)}>
          {team1Image ? team1Image.name : "Upload File"}
        </button>
        {team1Image && (
          <img src={URL.createObjectURL(team1Image)} alt={team1Image.name} className="uploaded-image" />
        )}

        <input
          id="team2ImageInput"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => handleImageUpload(e, setTeam2Image, 2)}
        />
        <button className="fileUploads" onClick={() => handleFileUploadClick(2)}>
          {team2Image ? team2Image.name : "Upload File"}
        </button>
        {team2Image && (
          <img src={URL.createObjectURL(team2Image)} alt={team2Image.name} className="uploaded-image2" />
        )}

        {/* Could not for the life of me figure out why the dropdown libraries weren't working so this will have to do
        Its sorta responsive 
        Choice of sports will eventually change which scoreboard pops up to let the user modify it
        Will probably have to redo the code a lot if I'm imagining what might happen right */}
        <Menu
          trigger={
            <MenuButton className="customMenuButton" variation="primary" size="medium" width="100%">
              {selectedSport}
            </MenuButton>
          }
        >
          <MenuItem onClick={() => handleSportSelection("Football")}>Football</MenuItem>
          <MenuItem onClick={() => handleSportSelection("Soccer")}>Soccer</MenuItem>
        </Menu>

        {/* This Button is for grabbing the users old saved templates to remodify */}
        {/* Will need somewhere to delete templates maybe? */}
        <Menu
          trigger={
            <MenuButton className="customMenuButton" variation="primary" size="medium" width="100%">
            {selectedTemplate}
            </MenuButton>
          }
        >
          <MenuItem onClick={() => handleTemplateSelection("Template 1")}>Saved Template 1</MenuItem>
          <MenuItem onClick={() => handleTemplateSelection("Template 2")}>Saved Template 2</MenuItem>
        </Menu>
      </div>

      {/* Temporarily Putting this in like this  */}
      
      <div>{SBComponent}</div>

      {/* NOTE: Somehow naming this the same as the other container messes up the home page css
      even though this links a different cs file and that one...idek */}
      <div className="container3">
      <Button className="ButtonSave" onClick={SaveTemplate}>Save Template</Button>
      </div>


    </View>
  );
};

export default ConfigEditor;
