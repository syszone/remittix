import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri"; // Dropdown arrow icon
import RemittixButton from "../RemittixButton/RemittixButton"; // Assuming you already have this button component
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

import "./DashboardNavbar.css";

const DashboardNavbar = () => {
  return (
    <div className="dashboard-navbar">
      <Link to="/" className="dashboard-navbar__logo">
        <img src={logo} alt="Remittix Logo" />
        <span> Remittix </span>
      </Link>

      <div className="dashboard-navbar__links">
        <div className="dashboard-navbar__link">
          <span>Markets</span>
        </div>
        <div className="dashboard-navbar__link dropdown">
          <span>Platform</span>
          <RiArrowDropDownLine />
          <div className="dropdown-content">
            <Link to="#">Platform 1</Link>
            <Link to="#">Platform 2</Link>
          </div>
        </div>
        <div className="dashboard-navbar__link dropdown">
          <span>Promotions</span>
          <RiArrowDropDownLine />
          <div className="dropdown-content">
            <Link to="#">Promotion 1</Link>
            <Link to="#">Promotion 2</Link>
          </div>
        </div>
        <div className="dashboard-navbar__link dropdown">
          <span>RTX Token</span>
          <RiArrowDropDownLine />
          <div className="dropdown-content">
            <Link to="#">Token Info</Link>
            <Link to="#">Token Analytics</Link>
          </div>
        </div>
        <div className="dashboard-navbar__link dropdown">
          <span>Company</span>
          <RiArrowDropDownLine />
          <div className="dropdown-content">
            <Link to="#">About Us</Link>
            <Link to="#">Careers</Link>
          </div>
        </div>
      </div>

      <div className="dashboard-navbar__actions">
        <span className="dashboard-navbar__login">Login</span>
        <RemittixButton text="Get Started" width="250px" />
        <div className="dashboard-navbar__divider"></div>
      </div>
      {/* Moved the LanguageDropdown here to stay within actions */}
      <div className="dashboard-navbar__language">
        <LanguageDropdown />
      </div>
    </div>
  );
};

export default DashboardNavbar;
