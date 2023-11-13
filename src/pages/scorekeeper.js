import React from "react";
import { Link } from "react-router-dom";
// our different score controllers
import FBScorekeeper from "./score_controllers/FB_controller";
import SoccerScorekeeper from "./score_controllers/Soccer_Controller";

/*
Vars and Functions in Scorekeeper:
Vars:
H_score - tracks home team score
V_Score - tracks visiting team score
Period - tracks the period, half, quarter, inning, etc.
Time - tracks time in game
Down - tracks downs (Football), Number of Outs (baseball), etc.
Distance - Holds any needed distance values (downs till 1st,)

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
const Scorekeeper = () => {
  let H_score = 0;
  let V_score = 0;
  localStorage.setItem("H_score", H_score);
  localStorage.setItem("V_score", V_score);

  function U_score(team, n) {
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

  // period has a different value per sport.
  // Ie bottom/top innings in baseball etc.
  // takes sting input, not user accessible
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
    let mins = Math.floor(T / 60);
    let secs = T % 60;
    if (secs > 9) {
      Time = mins.toString() + ":" + secs.toString();
    } else {
      Time = mins.toString() + ":0" + secs.toString();
    }
    localStorage.setItem("Time", Time);
  }

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
    if(T_Max === 0)
    {
      //set a default value in case user doesnt reset time
      T_Max = 45*60;
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
  // in the following, we will have multiple elements like FBScorekeeper
  // TODO: create more sports templates and setup conditional rendering
  // based on user input from dashboard
  const ScoreType = localStorage.getItem("ScoreboardType");
  let ScoreKeeperComponent;
  if (ScoreType === "FBSlim") {
    ScoreKeeperComponent = (
      <FBScorekeeper
        U_score={U_score}
        Change_Period={Change_Period}
        ResetTime={ResetTime}
        DecrementTime={DecrementTime}
        StopClock={StopClock}
        DefDistance={DefDistance}
        DefDown={DefDown}
      />
    );
  } else if (ScoreType === "Soccer") {
    ScoreKeeperComponent = (
      <SoccerScorekeeper
        U_score={U_score}
        Change_Period={Change_Period}
        ResetTime={ResetTime}
        IncrementTime={IncrementTime}
        StopClock={StopClock}
      />
    );
  }
  
  let obs = "False";
  if (typeof obsstudio !== "undefined") {
    obs = "true";
  }
  return (
    <>
      <div className="scorekeeper">
        <div>{ScoreKeeperComponent}</div>
        <Link to="/myscoreboard">
          <button>go to scoreboard</button>
        </Link>
        <Link to="/mydashboard">
          <button>End Session</button>
        </Link>
        {obs}
      </div>
    </>
  );
};

export default Scorekeeper;
