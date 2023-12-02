/*
<<<<<<< HEAD
configEdit.js
Description: React JS file for scoreboard editor page

Creation date: 10/21/23
Inital Author: Hunter McMahon
*/

// Import necessary React and UI components
=======
configedit.js
Description:
this component handles the user editing of scoreboard presets. Behavior relating to modifing and saving user presets is handled here
Creation date:
Inital Author: Hunter McMahon
*/
>>>>>>> d0ffc25e27029ee5a79c2b030c990741c0af70d2
import React, { useState, useEffect } from "react";
import { Button, View, Card } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import "../css/configEdit.css"; // External CSS for styling
import { Menu, MenuItem, MenuButton } from '@aws-amplify/ui-react';
// Import scoreboard components for different sports
import FBSlim from "./scoreboards/FB_Slim";
import Soccer from "./scoreboards/Soccer";
import Baseball from "./scoreboards/baseball";
import Basketball from "./scoreboards/basketball";

// Function for signing out the user
async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

// For grabbing the Amazon usrID
const getUserId = async () => {
  try {
    const userInfo = await Auth.currentAuthenticatedUser();
    return userInfo.attributes.sub; // 'sub' is the unique identifier for a Cognito user
  } catch (error) {
    console.error("Error fetching user info: ", error);
  }
};

// Component for the scoreboard editor
const ConfigEditor = () => {
  // Variables for setting and getting the two images, two colors, and sport the user will choose
  const [team1Image, setTeam1Image] = useState(null);
  const [team2Image, setTeam2Image] = useState(null);
  const [color1, setColor1] = useState("#90ee90");
  const [color2, setColor2] = useState("#90ee90");
  const [selectedSport, setSelectedSport] = useState("Choose a sport");
  const [selectedTemplate] = useState("Saved Scoreboards");
  const [SBComponent, setSBComponent] = useState("Pick a sport above to get started");
  const [HImage, setHImage] = useState("../../../logo192.png");
  const [VImage, setVImage] = useState("../../../logo192.png");
  // Used for handling saving and loading templates
  const [selectedSlot, setSelectedSlot] = useState(0);
  // Initializing the scoreboards in local storage

  // Function to initialize templates in local storage 
  const initTemplatesArray = () => {
    if (!localStorage.getItem('templates')) {
      localStorage.setItem('templates', JSON.stringify(Array(5).fill(null)));
    }
  };

//====================================UseStates to update various states=================
  // useEffect to initialize templates array when component mounts
  React.useEffect(() => {
    initTemplatesArray();
  }, []);

  useEffect(() => {
    handleSportSelection(selectedSport);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color1, color2, selectedSport]);

//========================================Sport Selection=========================
// Function to handle selection of different sports and set corresponding scoreboard components
  const handleSportSelection = (sport) => {
    // Logic to set the appropriate scoreboard component based on the selected sport
    // Update SBComponent state with the respective scoreboard component
    // Depending on the selected sport, different scoreboard components are rendered with predefined props
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
            himage={HImage}
            vimage={VImage}
            hname={"home team"}
            vname={"visiting team"}
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
            himage={HImage}
            vimage={VImage}
            hname={"home team"}
            vname={"visiting team"}
          />
        );
        break;
      case "Baseball":
        setSBComponent(
          <Baseball
            H_score={10}
            V_score={10}
            Period={5}
            Down={"1"}
            Balls={3}
            Strikes={2}
            Possetion={"T"}
            hcolor={color1}
            vcolor={color2}
            himage={HImage}
            vimage={VImage}
            hname={"home team"}
            vname={"visiting team"}
          />
        );
        break;
        case "Basketball":
        setSBComponent(
          <Basketball
            H_score={10}
            V_score={10}
            Period={1}
            Time={"00:00"}
            hcolor={color1}
            vcolor={color2}
            himage={HImage}
            vimage={VImage}
            hname={"home team"}
            vname={"visiting team"}
          />
        );
        break;
      default:
        break;
    }
  }; // fuck that

// ----------------------------------Color Changes---------------------
  // Function to handle changes in color selection for team 1
  const ColorChange1 = (event) => {
    setColor1(event.target.value);
    handleSportSelection(selectedSport);
  };

  // Function to handle changes in color selection for team 2
  const ColorChange2 = (event) => {
    setColor2(event.target.value);
    handleSportSelection(selectedSport);
  };

//------------------------------------Saving of Template-------------------------
  // Function to save the current template to local storage or backend
  const saveTemplate = async () => {
    // Get templates from local storage
    // Prepare template data including colors, images, sport, and user ID
    // Update the selected slot in local storage with the new template data
    // Optionally, send a POST request to a backend endpoint to save the template
    const templates = JSON.parse(localStorage.getItem('templates'));
    const userId = await getUserId();
    const templateData = {
      color1: color1,
      color2: color2,
      image1: "temp1",
      image2: "temp2",
      sport: selectedSport,
      userID: userId
    };
    templates[selectedSlot] = templateData;
    localStorage.setItem('templates', JSON.stringify(templates));
    alert(`Template saved to slot ${selectedSlot + 1}`);
    // // endpoint URL  backend
    // const endpoint = '34.209.99.170';

    // // Send a POST request to the backend
    // try {
    //   const response = await axios.post(endpoint, templateData);
    //   console.log(response.data);
    //   alert('Template saved successfully!');
    // } catch (error) {
    //   console.error('Error saving template:', error);
    //   alert('Failed to save template.');
    // }
  };

//------------------------------Image Uploading and verification------------------
  // Function to trigger file input click for team image upload
  const handleImageUpload = (event, setImage, teamNum) => {
    // Simulate click on file input element for team 1 or team 2 image upload
    // Update selected team image and trigger a re-render of the selected sport component
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
    if (teamNum === 1) {
      setHImage(img.src);
      handleSportSelection(selectedSport);
    } else {
      setVImage(img.src);
      handleSportSelection(selectedSport);
    }
    const fileInput = document.getElementById(`team${teamNum}ImageInput`);
    fileInput.previousSibling.textContent = file.name; // Changes the text of the button to the file name
  };

  const handleFileUploadClick = (teamNum) => {
    document.getElementById(`team${teamNum}ImageInput`).click();
    handleSportSelection(selectedSport);
  };


  //=======================================LOAD SCOREBOARDS===================================================
  // Slight modification to Hunters function to allow color changes
  const loadTemplate = (slotIndex) => {
    // Retrieve templates from local storage
    // Load the selected template data into the editor for modification
    // Update colors, images, selected sport, and trigger rendering of the selected sport component
    setSelectedSlot(slotIndex);
    const templates = JSON.parse(localStorage.getItem('templates'));
    const templateData = templates[slotIndex];
    if (templateData) {
      setColor1(templateData.color1);
      setColor2(templateData.color2);
      setHImage(templateData.team1Image);
      setVImage(templateData.team2Image);
      setSelectedSport(templateData.sport);
      // Load the sport component based on the saved sport
      handleSportSelection(templateData.sport);
    } else {
      alert(`No template found in slot ${slotIndex + 1}.`);
    }


  };


  //============================================HTML+REACT=========================
  // Spagehtti Code Incoming
  // Return JSX elements for the scoreboard editor interface
  return (

  //-----------------------------------------------Header + Navbar---------------
    <View className="App">
      <div className="sticky">
        <Card>
          <h1>Scoreboard Editor</h1>
        </Card>

        <div className="ButtonContainer">
          <Link to="/mydashboard">
            <Button className="toDashboardButton">Home</Button>
          </Link>
          <Button className="signout" onClick={signOut}>Sign Out</Button>
        </div>

        <div className="Sidebar">
          {/* Two colors */}
          <input className="colorPicker" type="color" value={color1} onChange={ColorChange1} />
          <input className="colorPicker" type="color" value={color2} onChange={ColorChange2} />

          {/*--------------------------------------------Button press to upload the user image for the teams---------------------------------*/}
         <input
            id="team1ImageInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => handleImageUpload(e, setTeam1Image, 1)}
          />
          <button className="fileUploads" onClick={() => handleFileUploadClick(1)}>
            {team1Image ? team1Image.name : "Upload File"}
          </button>

          <input
            id="team2ImageInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => handleImageUpload(e, setTeam2Image, 2)}
          />
          <button className="fileUploads" onClick={() => handleFileUploadClick(2)}>
            {team2Image ? team2Image.name : "Upload File"}
          </button>
 

          {/* Button to select sports */}
          <Menu
            trigger={
              <MenuButton className="customMenuButton" variation="primary" size="medium" width="100%">
                {selectedSport}
              </MenuButton>
            }
          >
            <MenuItem onClick={() => handleSportSelection("Football")}>Football</MenuItem>
            <MenuItem onClick={() => handleSportSelection("Soccer")}>Soccer</MenuItem>
            <MenuItem onClick={() => handleSportSelection("Baseball")}>Baseball/Softball</MenuItem>
            <MenuItem onClick={() => handleSportSelection("Basketball")}>Basketball</MenuItem>
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
              {[...Array(5).keys()].map((index) => (
                <MenuItem key={index} onClick={() => loadTemplate(index)}>
                  Load from Slot {index + 1}
                </MenuItem>
              ))}            </Menu>

          <div className="container3">
          <Button className="ButtonSave" onClick={() => saveTemplate(saveTemplate)}>
            Save Template
          </Button>          </div>
        </div>
      </div>

{/*===============Scoreboard Component Loading=================== */}
      <div>
        {SBComponent}
      </div>


      {/* NOTE: Somehow naming this the same as the other container messes up the home page css
      even though this links a different cs file and that one...idek */}
    </View>
  );
};

export default ConfigEditor;
