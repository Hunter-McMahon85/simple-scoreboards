import React from "react";
import { Link } from "react-router-dom";
// our different score controllers
import FBScorekeeper from "./score_controllers/FB_controller";

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
  let t_interval = null;
  let Time = "00:00";
  localStorage.setItem("Time", Time);

  function SetTime()
  {
    let mins = Math.floor(T / 60);
    let secs = T % 60;
    if (secs > 9){
      Time = mins.toString() + ":" + secs.toString();
    } else {
      Time = mins.toString() + ":0" + secs.toString();
    }
    localStorage.setItem("Time", Time);
  }

  function ResetTime(t) {
    T = t * 60;
    SetTime();
    clearInterval(t_interval);
  }

  function CountTime() {
    SetTime();

    if (T > 0) {
      T--;
    } else {
      clearInterval(t_interval);
    }
  }

  function DecrementTime() {
    clearInterval(t_interval);
    t_interval = setInterval(CountTime, 1000);
  }

  function StopDecrement() {
    clearInterval(t_interval);
  }

  return (
    <>
      <div className="scorekeeper">
        <FBScorekeeper
          U_score={U_score}
          Change_Period={Change_Period}
          ResetTime={ResetTime}
          DecrementTime={DecrementTime}
          StopDecrement={StopDecrement}
        />
        <p>
          <br></br>
        </p>
        <Link to="/myscoreboard">
          <button>go to scoreboard</button>
        </Link>
        <Link to="/mydashboard">
          <button>End Session</button>
        </Link>
      </div>
    </>
  );
};

export default Scorekeeper;
