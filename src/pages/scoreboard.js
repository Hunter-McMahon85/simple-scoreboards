import React, { useState, useEffect} from "react";

const Scoreboard = () => {
  // Initialize scores with 0
  const [H_score, setScoreH] = useState(0);
  const [V_score, setScoreV] = useState(0);

  // Function to update the scores from localStorage
  const reload = () => {
    setScoreH(localStorage.getItem("H_score"));
    setScoreV(localStorage.getItem("V_score"));
  };
  useEffect(() => {
    // Call reload initially and then every 1000 milliseconds (1 second)
    reload();
    const interval = setInterval(reload, 1);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>Visitor Score: {V_score}</h1>
      <h1>Home Score: {H_score}</h1>
    </>
  );
};

export default Scoreboard;