import React from "react";
import "../style/style.css";
import Leaderboard from "../components/Leaderboard/Leaderboard";
import TokenSale from "../components/TokenSale/TokenSale";

import balanceIcon from "../../assets/images/dashboard/icon_balance.svg";
import coinsIcon from "../../assets/images/dashboard/icon_coins.svg";
import walletSddressIcon from "../../assets/images/dashboard/icon_wallet_address.svg";
import plusSign from "../../assets/images/dashboard/plus-sign.svg";
import walletIcon from "../../assets/images/dashboard/icon_buy.svg";
import shieldLogoLeft from "../../assets/images/dashboard/logo_shield.svg";
import shieldLogoRight from "../../assets/images/dashboard/logo_shield2.svg";
import polygonIcon from "../../assets/images/dashboard/icon_polygon.svg";
import floatingStars from "../../assets/images/dashboard/floating_stars.svg";
import referralsIcon from "../../assets/images/dashboard/referrals_icon.png";

import referralsEarningsIcon from "../../assets/images/dashboard/referrals_earnings_icon.png";
import copyLinkIcon from "../../assets/images/dashboard/copy_link_icon.png";

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => {
      alert("Referral link copied to clipboard!");
    },
    (err) => {
      console.error("Could not copy text: ", err);
    }
  );
};

const DashboardHome = () => {
  return (
    <div className="  dashboard-page dashboard-flex ">
      {/* Row 1 - Single Column */}

      <div
        className="dashboard-row single-column "
        style={{ marginTop: "55px" }}
      >
        <div className="dashboard-column">
          <div className="welcome-text">Welcome to Remittix Dashboard! 👋</div>
          <div className="dashboard-row three-column padding-20px">
            {/* Column 1 */}
            <div className="dashboard-card">
              <div className="card-left">
                <div className="card-title">Your Total Remittix Balance</div>
                <div className="card-value">0.00</div>
              </div>
              <div className="card-right">
                <img
                  src={balanceIcon}
                  alt="Balance Icon"
                  className="card-icon"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="dashboard-card">
              <div className="card-left">
                <div className="card-title">Your Coin Worth at Launch</div>
                <div className="card-value">0.00</div>
              </div>
              <div className="card-right">
                <img src={coinsIcon} alt="Balance Icon" className="card-icon" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="dashboard-card">
              <div className="card-left">
                <div className="card-title">Receiving Wallet Address</div>
                {/* <div className="card-value">0.00</div> */}
                <div class="custom-input-box">
                  <img src={walletIcon} alt="Icon" class="input-icon" />

                  <input
                    type="text"
                    placeholder="Enter text here..."
                    class="text-input"
                  />

                  <div class="add-link">
                    <img src={plusSign} alt="Add" class="add-icon" />
                    <span>ADD</span>
                  </div>
                </div>
              </div>
              <div className="card-right">
                <img
                  src={walletSddressIcon}
                  alt="Balance Icon"
                  className="card-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-row full-view-row" style={{ height: "120px" }}>
        {/* Full View Only */}
        {/* Column 1: Logo */}
        <div className="logo-column">
          <img src={shieldLogoLeft} alt="Shield Logo" />
        </div>

        {/* Column 2: Level and Rank */}
        <div className="dashboard-column-level">
          <div className="level">Level 1</div>
          <div className="rank">Current Rank</div>
        </div>

        {/* Column 3: Progress Bar and Boxes */}
        <div className="progress-bar-wrapper">
          <div className="progress-bar">
            <div className="boxLeft">
              <div className="box-text">1</div>
              <img src={polygonIcon} alt="Polygon Icon" />
            </div>
            <div className="progress-fill">
              <div className="floating-star">
                <img src={floatingStars} alt="Floating Stars" />
              </div>
              <div className="progress-text">20%</div>
            </div>
            <div className="boxRight">
              <div className="box-text">2</div>
              <img src={polygonIcon} alt="Polygon Icon" />
            </div>
          </div>
        </div>

        {/* Column 4: Level and Rank */}
        <div className="dashboard-column-level">
          <div className="level">Level 2</div>
          <div className="rank">Next Rank</div>
        </div>

        {/* Column 5: Logo */}
        <div className="logo-column">
          <img src={shieldLogoRight} alt="Shield Logo" />
        </div>
      </div>

      {/* Mobile View Only */}
      <div className="dashboard-row mobile-view-row">
        {/* Row 1: Side-by-side logos and levels */}
        <div className="mobile-top-row">
          {/* Left Logo and Level */}
          <div className="mobile-column">
            <div className="logo-column">
              <img src={shieldLogoLeft} alt="Shield Logo Left" />
            </div>
            <div className="dashboard-column-level">
              <div className="level">Level 1</div>
              <div className="rank">Current Rank</div>
            </div>
          </div>

          {/* Right Logo and Level */}
          <div className="mobile-column">
            <div className="logo-column">
              <img src={shieldLogoRight} alt="Shield Logo Right" />
            </div>
            <div className="dashboard-column-level">
              <div className="level">Level 2</div>
              <div className="rank">Next Rank</div>
            </div>
          </div>
        </div>

        {/* Row 2: Progress Bar */}
        <div className="progress-bar-wrapper">
          <div className="progress-bar">
            <div className="boxLeft">
              <div className="box-text">1</div>
              <img src={polygonIcon} alt="Polygon Icon" />
            </div>
            <div className="progress-fill">
              <div className="floating-star">
                <img src={floatingStars} alt="Floating Stars" />
              </div>
              <div className="progress-text">20%</div>
            </div>
            <div className="boxRight">
              <div className="box-text">2</div>
              <img src={polygonIcon} alt="Polygon Icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 - Two Columns */}
      <div className="dashboard-row two-columns">
        {/* style={{ height: "906px" }} */}
        <div className="mobileBottomMargine">
          {/* Content for Row 3 - Column 1 */}
          <TokenSale />
        </div>
        <div className="dashboard-column-nonorder mobileBottomMargine">
          {/* Content for Row 3 - Column 2 */}
          <Leaderboard rowsPerPage={5} />
        </div>
      </div>

      {/* Row 4 - Two Columns */}
      <div className="dashboard-row two-columns">
        <div className="dashboard-column mobileBottomMargine">
          {/* Content for Row 4 - Column 1 */}
          <div className="dashboard-column-title">Your Last Transactions</div>
          <p>There are no finalized transactions yet...</p>
        </div>
        <div className="dashboard-column ">
          {/* Content for Row 4 - Column 2 */}
          <div className="dashboard-column-title">Referrals</div>

          {/* Referrals Box 1 */}
          <div className="dashboard-referrals-box">
            {/* Icon Column */}
            <div className="referrals-icon">
              <img src={referralsIcon} alt="Icon" />
            </div>

            {/* Text Column */}
            <div className="referrals-text">Your Referrals</div>

            {/* Number Box Column */}
            <div className="referrals-number-box">
              <span>0</span>
            </div>
          </div>
          {/* Referrals Box 2 */}
          <div className="dashboard-referrals-box">
            {/* Icon Column */}
            <div className="referrals-icon">
              <img src={referralsEarningsIcon} alt="Icon" />
            </div>

            {/* Text Column */}
            <div className="referrals-text">Your Referral Earnings</div>

            {/* Number Box Column */}
            <div className="referrals-number-box">
              <span>0</span>
            </div>
          </div>

          {/* Referrals Link */}
          <div className="dashboard-referrals-link">
            {/* Text */}
            <div className="referrals-link-text" id="referral-link">
              https://purchase.remittix.network/?ref=arj260
            </div>

            {/* Icon Box */}
            <div
              className="referrals-link-icon-box"
              onClick={() =>
                copyToClipboard("https://purchase.remittix.network/?ref=arj260")
              }
            >
              <img
                src={copyLinkIcon}
                alt="Link Icon"
                className="referrals-link-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
