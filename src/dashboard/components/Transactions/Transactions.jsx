import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for expand/collapse
import logo from "../../../assets/images/logo.png";
import totalTransactions from "../../../assets/images/icon_total_transactions.png";
import transactionsAmount from "../../../assets/images/icon_amount_transactions.png";

import "./Transactions.css"; // Encapsulated styles for Transactions component
import transactionsData from "./transactionsData.json";

const Transactions = ({
  title = "Transactions",
  columnsToShow = [],
  showHeaders = true,
  showPagination = true,
  rowsPerPage = 5,
}) => {
  const columns = [
    {
      name: "Coin",
      header: "COIN",
      row: (data) => (
        <div className="txn-coin">
          <div className="txn-coin-logo">
            <img src={logo} alt="coin logo" />
          </div>
          <div className="txn-coin-name">{data.coin}</div>
        </div>
      ),
    },
    { name: "OrderId", header: "ORDER ID", row: (data) => data.orderId },
    {
      name: "BuyBackValue",
      header: "BUYBACK VALUE",
      row: (data) => data.buyBackValue,
    },
    { name: "Amount", header: "AMOUNT", row: (data) => data.amount },
    { name: "Price", header: "PRICE", row: (data) => data.price },
    { name: "Value", header: "VALUE", row: (data) => data.value },
    { name: "TimeAgo", header: "TIME AGO", row: (data) => data.timeAgo },
  ];

  const rowData = transactionsData;
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRow, setExpandedRow] = useState(null); // Track expanded row

  const totalPages = Math.ceil(rowData.length / rowsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const toggleExpandRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const filteredColumns = columns.filter((col) =>
    columnsToShow.includes(col.name)
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rowData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="transactions-container">
      <div className="transactions-title" style={{ fontSize: "24px" }}>
        {title}
      </div>

      {showHeaders && (
        <div className="transactions-header-row">
          <div className="transactions-header-box">
            <div className="transactions-header-content">
              <div className="transactions-header-icon">
                <img src={totalTransactions} alt="Total Transactions" />
              </div>
              <div className="transactions-header-text">
                Total Completed Transactions
              </div>
            </div>
            <div className="transactions-header-number-box">
              <span>0</span>
            </div>
          </div>
          <div className="transactions-header-box">
            <div className="transactions-header-content">
              <div className="transactions-header-icon">
                <img src={transactionsAmount} alt="Transactions Amount" />
              </div>
              <div className="transactions-header-text">
                Total Transactions Amount
              </div>
            </div>
            <div className="transactions-header-number-box">
              <span>5</span>
            </div>
          </div>
        </div>
      )}

      <div className="transactions-body">
        {currentRows.map((data, rowIndex) => (
          <>
            <div className="transactions-row-box">
              <div key={rowIndex} className="transactions-row">
                {filteredColumns.map((col, colIndex) => (
                  <div
                    key={colIndex}
                    className={`transactions-row-col col-${col.name}`}
                  >
                    {col.row(data)}
                  </div>
                ))}

                <div
                  className="transactions-toggle-icon"
                  onClick={() => toggleExpandRow(rowIndex)}
                >
                  {expandedRow === rowIndex ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </div>
              </div>
              {expandedRow === rowIndex && (
                <div className="transactions-row-details">
                  <div className="transactions-row-detail">
                    <span className="detail-label">Order ID:</span>{" "}
                    {data.orderId}
                  </div>
                  <div className="transactions-row-detail">
                    <span className="detail-label">Value:</span> {data.value}
                  </div>
                  <div className="transactions-row-detail">
                    <span className="detail-label">Time Ago:</span>{" "}
                    {data.timeAgo}
                  </div>
                </div>
              )}
            </div>
          </>
        ))}
      </div>

      {showPagination && (
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
      )}
    </div>
  );
};

export default Transactions;
