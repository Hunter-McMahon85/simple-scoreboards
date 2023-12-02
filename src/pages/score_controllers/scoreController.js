// holds score controller elements
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
// our different score controllers
import FBScorekeeper from "./FB_controller";
import SoccerScorekeeper from "./Soccer_Controller";
import BaseballController from "./BaseballController";
import BasketScorekeeper from "./BasketballController";
import copy from "clipboard-copy";

// you

// Function and Variable Descriptions:

/*
Vars and Functions in Scorekeeper:
Vars:
H_score - tracks home team score
V_Score - tracks visiting team score
Period - tracks the period, half, quarter, inning, etc.
Time - tracks time in game
Down - tracks downs (Football), Number of Outs (baseball), etc.
Distance - Holds any needed distance values (downs till 1st,)
strikes - baseball/softball 
balls - baseball/softball
runners - baseball/softball
possetion - who's on offense 

Functions:
U_score(team, n)- +/- n points from given team
Change_Period()- increments the period
SetTime() - Uses the value of T to update Time and save to local storage
ResetTime(t, d) - puts t seconds on the clock, d = -1 for decrement, d = 1 for increment
CountTime(d) - runs the clock d = -1 for decrement, d = 1 for increment
IncrementTime() - runs the clock counting up (calls count time)
DecrementTime() - runs the clock counting down (calls count time)
StopClock() - clears interval to stop the clock
*/

const ScoreController = () => {
  // State variables to store colors for home and visiting teams
  const [Hcolor, setHcolor] = useState("blue");
  const [Vcolor, setVcolor] = useState("red");

  useEffect(() => {
    // Retrieve stored colors from local storage on component mount
    setHcolor(localStorage.getItem("hcolor"))
    setVcolor(localStorage.getItem("vcolor"))
  }, []);

  // Variables to track scores for home and visiting teams stored in local storage
  let H_score = 0;
  let V_score = 0;
  localStorage.setItem("H_score", H_score);
  localStorage.setItem("V_score", V_score);

  // Function to update scores for home and visiting teams
  function U_score(team, n) {
    // Increment scores for the selected team and update local storage
    if (team === "h") {
      H_score += n;
      localStorage.setItem("H_score", H_score);
    }
    if (team === "v") {
      V_score += n;
      localStorage.setItem("V_score", V_score);
    }
  }

  //for tracking what quarter, inning, period etc.
  let Period = 1;
  localStorage.setItem("Period", Period);

  // Function to change the current period, inning, or quarter
  function Change_Period() {
    Period += 1;
    localStorage.setItem("Period", Period);
  }

  // game timers
  let T = 0;
  let T_Max = 0;
  let T_Interval = null;
  let Time = "00:00";
  localStorage.setItem("Time", Time);

  function SetTime() {
    // Update and format the game time and store it in local storage
    let mins = Math.floor(T / 60);
    let secs = T % 60;
    if (secs > 9) {
      Time = mins.toString() + ":" + secs.toString();
    } else {
      Time = mins.toString() + ":0" + secs.toString();
    }
    localStorage.setItem("Time", Time);
  }

  // --- Functions to manage game time (reset, count, increment, decrement, stop) -------------------------------
  function ResetTime(t, d) {
    clearInterval(T_Interval);
    T_Max = t * 60;
    if (d === -1) {
      T = T_Max;
    } else {
      T = 0;
    }
    SetTime();
  }

  function CountTime(d) {
    if (d === -1) {
      if (T > 0) {
        T--;
      } else {
        clearInterval(T_Interval);
      }
    }
    if (d === 1) {
      if (T < T_Max) {
        T++;
      } else {
        clearInterval(T_Interval);
      }
    }
    SetTime();
  }

  function IncrementTime() {
    if (T_Max === 0) {
      //set a default value in case user doesnt reset time
      T_Max = 45 * 60;
    }
    clearInterval(T_Interval);
    T_Interval = setInterval(() => CountTime(1), 1000);
  }

  function DecrementTime() {
    clearInterval(T_Interval);
    T_Interval = setInterval(() => CountTime(-1), 1000);
  }

  function StopClock() {
    clearInterval(T_Interval);
  }

  // down and distance
  let down = "";
  let distance = "";
  localStorage.setItem("Down", down);
  localStorage.setItem("Distance", distance);

  function DefDown(d) {
    down = d;
    localStorage.setItem("Down", down);
  }

  function DefDistance(d) {
    distance = d;
    localStorage.setItem("Distance", distance);
  }

  let strikes = 0;
  let balls = 0;
  localStorage.setItem("Strikes", strikes);
  localStorage.setItem("Balls", balls);
  function pitch_res(t, x) {
    switch (t) {
      case "b":
        balls = x;
        localStorage.setItem("Balls", balls);
        break;
      case "s":
        strikes = x;
        localStorage.setItem("Strikes", strikes);
        break;
      default:
        break;
    }
  }

  let possetion = "";
  localStorage.setItem("Possetion", possetion);
  function Change_Pos(t) {
    possetion = t;
    localStorage.setItem("Possetion", possetion);
  }
  
  // Logic to determine the type of scorekeeper based on the selected sport from local storage
  const ScoreType = localStorage.getItem("ScoreboardType");
  let ScoreKeeperComponent;
  switch (ScoreType) {
    // Cases for different sports to render corresponding scorekeeping
    case "Football":
      ScoreKeeperComponent = (
        <FBScorekeeper
          U_score={U_score}
          Change_Period={Change_Period}
          ResetTime={ResetTime}
          DecrementTime={DecrementTime}
          StopClock={StopClock}
          DefDistance={DefDistance}
          DefDown={DefDown}
          hcolor={Hcolor}
          vcolor={Vcolor}
        />
      );
      break;
    case "Soccer":
      ScoreKeeperComponent = (
        <SoccerScorekeeper
          U_score={U_score}
          Change_Period={Change_Period}
          ResetTime={ResetTime}
          IncrementTime={IncrementTime}
          StopClock={StopClock}
          hcolor={Hcolor}
          vcolor={Vcolor}
        />
      );
      break;
    case "Baseball":
      /*TODO: add graphics for baserunners*/
      ScoreKeeperComponent = (
        <BaseballController
          U_score={U_score}
          Change_Period={Change_Period}
          pitch_res={pitch_res}
          DefDown={DefDown}
          Change_Pos={Change_Pos}
          hcolor={Hcolor}
          vcolor={Vcolor}
        />
      );
      break;
    case "Basketball":
      ScoreKeeperComponent = (
        <BasketScorekeeper
          U_score={U_score}
          Change_Period={Change_Period}
          ResetTime={ResetTime}
          DecrementTime={DecrementTime}
          StopClock={StopClock}
          hcolor={Hcolor}
          vcolor={Vcolor}
        />
      );
      break;
    default:
      ScoreKeeperComponent = null;
      break;
  }

  // Function to copy a link for the scoreboard to the clipboard
  const HandleCpy = () => {
    let textToCopy = "simplescoreboards.com/myscoreboard"
    copy(textToCopy);
    alert(`Link to the scoreboard, ${textToCopy}, is copied to your clipboard. Add it to OBS as a browser source in the sources tab to get started scorekeeping`);
  };

  // Return JSX elements for the ScoreController component
  return (
    <>
      <div>
        <div>{ScoreKeeperComponent}</div>
        <div className="SeshEnd">
          <Link to="/mydashboard">
            <button onClick={() => StopClock()}>End Session</button>
          </Link>
          <p className="cpy" onClick={() => HandleCpy()}>
            Scoreboard not showing? make sure to add <b>simplescoreboards.com/myscoreboard</b> as a browser source in the OBS sources tab and refresh.
          </p>
        </div>
      </div>
    </>
  );
};

export default ScoreController;
