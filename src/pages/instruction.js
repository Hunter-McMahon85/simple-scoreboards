import React from "react";
import { Link } from "react-router-dom";
import"../css/home.css";

const setupguide = () => {
  return (
    <>
    <div>
        <h1 class="about">Here you can learn to become a sports Broadcaster</h1>
        <Link to="/mydashboard">
        <button>Create your account today!</button>
        </Link>
    
    </div>
    </>
  );
};

export default setupguide;