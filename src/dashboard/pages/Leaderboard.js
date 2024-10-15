import React from "react";
import "../style/style.css";
import Lboard from "../components/Leaderboard/Leaderboard";

const Leaderboard = () => {
  return (
    <div className="dashboard-page page-margin">
      {/* You can add your leaderboard data here */}
      <Lboard rowsPerPage={10} />
    </div>
  );
};

export default Leaderboard;
