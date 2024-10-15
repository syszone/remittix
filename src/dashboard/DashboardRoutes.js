import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import BuyNow from "./pages/BuyNow";
import Transactions from "./pages/Transactions";
import Leaderboard from "./pages/Leaderboard";
import ProjectUpdates from "./pages/ProjectUpdates";
import Profile from "./pages/Profile";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout"; // Import the layout

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardHome />} />
        <Route path="home" element={<DashboardHome />} />
        <Route path="buy-now" element={<BuyNow />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="project-updates" element={<ProjectUpdates />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
