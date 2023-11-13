// landing page component
import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const landing = () => {
  return (
    <>
      <div class="container">
        <div class="left">
          <h1>Simple Scoreboards</h1>
          <form>
            <Link to="/mydashboard">
              <button className="broadcast-button">Log in</button>
            </Link>
          </form>
          <h6>
            <Link to="/mydashboard">Don't have an account? Sign up!</Link>
          </h6>
        </div>
        <div class="right">
          <p class="generic">
            Every great play has a great call, make your broadcast more
            proffesional with our free and easy to use overlays today!
          </p>
          <Link to="/usingsimplescoreboards">
            <button className="broadcast-button">Learn to use Simple Scoreboard Overlays</button>
          </Link>
        </div>
      </div>
      <div class="full-width-container">
        <div class="about">
          <h1>About</h1>
          <p class="about-desc">
            Whether its for your hobby or education, simple scoreboards provides
            you with everything you need to get started with sports broadcasting.
            We offer both tools and educational resources on how to create your
            own sports broadcast!
          </p>
          <Link to="/learntobroadcast">
            <button className="broadcast-button">Learn How To Become a Sports Broadcaster Here</button>
          </Link>
          <h2>Sports with Simple Scoreboard Overlays:</h2>
          <ul>
            <li>American Football</li>
            <li>Basketball</li>
            <li>Baseball/Softball</li>
            <li>Soccer</li>
            <li>Hockey</li>
            <li>Volleyball</li>
            <li>Rugby</li>
            <li>Cricket</li>
          </ul>
        </div>
    
          </div>
    </>
  );
};

export default landing;
