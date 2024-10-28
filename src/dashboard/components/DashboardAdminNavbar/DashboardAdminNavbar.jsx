import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaChevronRight, FaTimes } from "react-icons/fa";
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
import "./DashboardAdminNavbar.css";

const DashboardAdminNavbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Overlay to darken the background */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      <div
        className={`dashboard-admin-navbar ${
          isMenuOpen ? "menu-open" : "menu-closed"
        }`}
      >
        {/* Mobile Navbar */}
        <div className="dashboard-admin-navbar__mobile-header">
          <Link to="/" className="dashboard-admin-navbar__logo">
            <img src={logo} alt="Remittix Logo" />
            <span>Remittix</span>
          </Link>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className="dashboard-admin-navbar__divider mobile-divider"
          style={{ width: "100%", marginTop: 15 }}
        ></div>
        {/* Header */}
        <div className="dashboard-admin-navbar__header">
          <Link to="/" className="dashboard-admin-navbar__logo">
            <img src={logo} alt="Remittix Logo" />
            <span>Remittix</span>
          </Link>
          <div className="dashboard-admin-navbar__divider"></div>
        </div>

        {/* Links Section */}
        <div
          className={`dashboard-admin-navbar__links ${
            isMenuOpen ? "menu-open" : ""
          }`}
        >
          <Link
            to="/dashboard"
            className={`dashboard-admin-navbar__link ${
              isActive("/dashboard") ? "selected" : ""
            }`}
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
          >
            <div className="linkWraper">
              <div className="icon-box">
                <img src={transactionsIcon} alt="Transactions Icon" />
              </div>
              <div className="icon-selected-box">
                <img
                  src={transactionsIconSelected}
                  alt="transactionsIcon Icon"
                />
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
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
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
        <div
          className={`dashboard-admin-navbar__footer ${
            isMenuOpen ? "visible" : ""
          }`}
        >
          <Link to="/dashboard/profile" onClick={closeMenu}>
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
          </Link>
          <div className="logout-section">
            <span className="logout-text">Logout</span>
            <FaChevronRight className="logout-arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdminNavbar;
