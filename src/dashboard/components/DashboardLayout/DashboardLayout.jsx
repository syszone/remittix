import React from "react";
import { Outlet } from "react-router-dom"; // To handle nested routes
import DashboardAdminNavbar from "../DashboardAdminNavbar/DashboardAdminNavbar";
import "./DashboardLayout.css"; // CSS for the common layout and background

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout dashboard-background">
      {" "}
      {/* Apply the background class here */}
      <DashboardAdminNavbar />
      <div className="dashboard-content">
        <Outlet /> {/* This will render the matched child route */}
      </div>
    </div>
  );
};

export default DashboardLayout;
