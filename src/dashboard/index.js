import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "./pages/Profile"; // Assuming you already have this component
import DashboardSettings from "./DashboardSettings"; // Example of another dashboard page

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<DashboardHome />} />
      <Route path="settings" element={<DashboardSettings />} />
      {/* Add more dashboard routes here */}
    </Routes>
  );
};

export default DashboardRoutes;
