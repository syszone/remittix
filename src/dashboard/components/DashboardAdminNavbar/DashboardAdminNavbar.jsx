import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import userImage from "../../../assets/images/dashboard/userImage.png";
import homeIcon from "../../../assets/images/dashboard/icon_home.svg";
import buyIcon from "../../../assets/images/dashboard/icon_buy.svg";
import transactionsIcon from "../../../assets/images/dashboard/icon_transaction.svg";
import leaderboardIcon from "../../../assets/images/dashboard/icon_leaderboard.svg";
import ProjectIcon from "../../../assets/images/dashboard/icon_project_updates.svg";
import ClaimIcon from "../../../assets/images/dashboard/icon_claim.svg";

import homeIconSelected from "../../../assets/images/dashboard/icon_home_selected.svg";
import buyIconSelected from "../../../assets/images/dashboard/icon_buy_selected.svg";
import transactionsIconSelected from "../../../assets/images/dashboard/icon_transaction_selected.svg";
import leaderboardIconSelected from "../../../assets/images/dashboard/icon_leaderboard_selected.svg";
import ProjectIconSelected from "../../../assets/images/dashboard/icon_project_updates_selected.svg";
import ClaimIconSelected from "../../../assets/images/dashboard/icon_claim_selected.svg";

import { FaChevronRight } from "react-icons/fa";
import "./DashboardAdminNavbar.css";

const DashboardAdminNavbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="dashboard-admin-navbar">
      {/* Header */}
      <div className="dashboard-admin-navbar__header">
        <Link to="/" className="dashboard-admin-navbar__logo">
          <img src={logo} alt="Remittix Logo" />
          <span>Remittix</span>
        </Link>
        <div className="dashboard-admin-navbar__divider"></div>
      </div>

      {/* Links Section */}
      <div className="dashboard-admin-navbar__links">
        <Link
          to="/dashboard"
          className={`dashboard-admin-navbar__link ${
            isActive("/dashboard") ? "selected" : ""
          }`}
        >
          <div className="linkWraper">
            <div className="icon-box">
              <img src={homeIcon} alt="Dashboard Icon" />
            </div>
            <div className="icon-selected-box">
              <img src={homeIconSelected} alt="homeIcon Icon" />
            </div>
            <span className="link-text">Dashboard</span>
            <FaChevronRight className="link-arrow" />
          </div>
        </Link>

        <Link
          to="/dashboard/buy-now"
          className={`dashboard-admin-navbar__link ${
            isActive("/dashboard/buy-now") ? "selected" : ""
          }`}
        >
          <div className="linkWraper">
            <div className="icon-box">
              <img src={buyIcon} alt="Buy Icon" />
            </div>
            <div className="icon-selected-box">
              <img src={buyIconSelected} alt="Buy Icon" />
            </div>
            <span className="link-text">Buy Now</span>
            <FaChevronRight className="link-arrow" />
          </div>
        </Link>

        <Link
          to="/dashboard/transactions"
          className={`dashboard-admin-navbar__link ${
            isActive("/dashboard/transactions") ? "selected" : ""
          }`}
        >
          <div className="linkWraper">
            <div className="icon-box">
              <img src={transactionsIcon} alt="Transactions Icon" />
            </div>
            <div className="icon-selected-box">
              <img src={transactionsIconSelected} alt="transactionsIcon Icon" />
            </div>
            <span className="link-text">Transactions</span>
            <FaChevronRight className="link-arrow" />
          </div>
        </Link>

        <Link
          to="/dashboard/leaderboard"
          className={`dashboard-admin-navbar__link ${
            isActive("/dashboard/leaderboard") ? "selected" : ""
          }`}
        >
          <div className="linkWraper">
            <div className="icon-box">
              <img src={leaderboardIcon} alt="Leaderboard Icon" />
            </div>
            <div className="icon-selected-box">
              <img src={leaderboardIconSelected} alt="Leaderboard Icon" />
            </div>
            <span className="link-text">Leaderboard</span>
            <FaChevronRight className="link-arrow" />
          </div>
        </Link>

        <Link
          to="/dashboard/project-updates"
          className={`dashboard-admin-navbar__link ${
            isActive("/dashboard/project-updates") ? "selected" : ""
          }`}
        >
          <div className="linkWraper">
            <div className="icon-box">
              <img src={ProjectIcon} alt="Project Updates Icon" />
            </div>
            <div className="icon-selected-box">
              <img src={ProjectIconSelected} alt="Project Updates Icon" />
            </div>
            <span className="link-text">Project Updates</span>
            <FaChevronRight className="link-arrow" />
          </div>
        </Link>

        <Link
          to="/dashboard/claim"
          className={`dashboard-admin-navbar__link ${
            isActive("/dashboard/claim") ? "selected" : ""
          }`}
        >
          <div className="linkWraper">
            <div className="icon-box">
              <img src={ClaimIcon} alt="Claim Updates Icon" />
            </div>
            <div className="icon-selected-box">
              <img src={ClaimIconSelected} alt="Claim Updates Icon" />
            </div>
            <span className="link-text">Claim</span>
            <FaChevronRight className="link-arrow" />
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="dashboard-admin-navbar__footer">
        <div className="user-info">
          <div
            className="user-picture"
            style={{ backgroundImage: `url(${userImage})` }}
          ></div>
          <div className="user-details">
            <span className="logged-in-text">Logged in as</span>
            <span className="user-name">Srdjan N.</span>
          </div>
        </div>

        <div className="logout-section">
          <span className="logout-text">Logout</span>
          <FaChevronRight className="logout-arrow" />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdminNavbar;
