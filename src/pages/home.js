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
              <button>Get Started Today!</button>
            </Link>
          </form>
          <h6>
            <Link to="/mydashboard">Don't have an account? Sign up!</Link>
          </h6>
        </div>
        <div class="right">
          <p>
            Simple Scoreboards is an innovate tool that allows you, the user to
            create scoreboards for any sport without the hassle of large
            subscriptions
          </p>
        </div>
      </div>
      <h1 class="about">About</h1>
      <p>
        Whether its for your hobby or education, simple scoreboards provides you
        with everything you need to get started with sports broadcasting.
      </p>
      <Link to="/mydashboard">
        <button>Learn How To Become a Sports Broadcaster Here</button>
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
    </>
  );
};

export default landing;
