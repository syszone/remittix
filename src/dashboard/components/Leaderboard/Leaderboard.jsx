import React, { useState } from "react";
import leaderboardData from "./leaderboardData.json"; // External JSON for demo data
import "./Leaderboard.css"; // Styles for Leaderboard component
import lboardShield from "../../../assets/images/dashboard/leaderboardShield.png";
import logoShield from "../../../assets/images/dashboard/logo_shield.svg";

const Leaderboard = ({ rowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate data for current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = leaderboardData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(leaderboardData.length / rowsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-title">$RTX Leaderboards</div>

      {currentRows.map((row, index) => (
        <div key={index} className="leaderboard-row-wrapper">
          <div key={index} className="leaderboard-row">
            {/* Column 1: Rank Box */}
            <div className="leaderboard-rank">
              <div className="rank-box">
                <span className="rank-number">
                  {indexOfFirstRow + index + 1}
                </span>
              </div>
            </div>

            {/* Column 2: Image */}
            <div className="leaderboard-image">
              <img src={lboardShield} alt="leaderboard shield" />
            </div>

            {/* Column 3: Token Address and Level */}
            <div className="leaderboard-details">
              <div className="token-address">{row.tokenAddress}</div>
              <div className="level-box">
                <span className="level-text">Level {row.level}</span>
              </div>
            </div>

            {/* Column 4: Total Transactions - hidden on mobile */}
            <div className="leaderboard-transactions desktop-only">
              <div className="total-tx-text">Total Transactions</div>
              <div className="total-tx-amount">{row.totalAmount}</div>
            </div>
          </div>

          {/* Mobile-only row for Total Transactions */}
          <div className="leaderboard-transactions mobile-only">
            <div className="total-tx-text">Total Transactions</div>
            <div className="total-tx-amount">{row.totalAmount}</div>
          </div>

          {/* Divider */}
          <div className="leaderboard-divider"></div>
        </div>
      ))}

      {/* Pagination */}
      <div className="pagination">
        <button
          className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`pagination-btn ${
              currentPage === i + 1 ? "selected" : ""
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className={`pagination-btn ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>

      {/* Additional "Your Place" Box */}
      <div className="your-place-box">
        <div className="your-place-title">Your Place</div>
        <div className="leaderboard-row">
          {/* Similar to rows above */}
          <div className="leaderboard-rank">
            <div className="rank-box">
              <span className="rank-number">1</span>
            </div>
          </div>

          <div className="leaderboard-image">
            <img src={logoShield} alt="Your Shield" />
          </div>

          <div className="leaderboard-details">
            <div className="token-address">0x1234...5678</div>
            <div className="level-box">
              <span className="level-text">Level 5</span>
            </div>
          </div>

          <div className="leaderboard-transactions desktop-only">
            <div className="total-tx-text">Total Transactions</div>
            <div className="total-tx-amount">$1,234,567.89</div>
          </div>
        </div>
        <div className="leaderboard-transactions mobile-only">
          <div className="total-tx-text">Total Transactions</div>
          <div className="total-tx-amount">$1,234,567.89</div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
