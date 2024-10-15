import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import "./Transactions.css"; // Encapsulated styles for Transactions component
import transactionsData from "./transactionsData.json";

const Transactions = ({
  title = "Transactions",
  columnsToShow = [],
  showHeaders = true,
  showPagination = true, // Toggle pagination
  rowsPerPage = 5, // Number of rows per page (can be set during implementation)
}) => {
  // Default column data (can be customized or removed via implementation)
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

  // Sample data (rows)
  //   const rowData = [
  //     {
  //       coin: "$RTX",
  //       orderId: "4523725847",
  //       buyBackValue: "443,192.01 $RTX",
  //       amount: "650,000",
  //       price: "$0.01",
  //       value: "$6,500.00",
  //       timeAgo: "2 Hours Ago",
  //     },
  //     {
  //       coin: "$RTX",
  //       orderId: "4523725890",
  //       buyBackValue: "50,000 $RTX",
  //       amount: "250,000",
  //       price: "$0.02",
  //       value: "$5,000.00",
  //       timeAgo: "1 Hour Ago",
  //     },
  // Add more rows for testing
  //];

  const rowData = transactionsData;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(rowData.length / rowsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Filtering columns to show
  const filteredColumns = columns.filter((col) =>
    columnsToShow.includes(col.name)
  );

  // Paginate the rows based on the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rowData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="transactions-container">
      {/* Title */}
      <div className="transactions-title" style={{ fontSize: "24px" }}>
        {title}
      </div>

      {/* Conditionally render the headers */}
      {showHeaders && (
        <div className="transactions-header-row">
          {/* Header Box 1 */}
          <div className="transactions-header-box">
            <div className="transactions-header-icon">
              <img src={logo} alt="Referrals Icon" />
            </div>
            <div className="transactions-header-text">
              Total Completed Transactions
            </div>
            <div className="transactions-header-number-box">
              <span>0</span>
            </div>
          </div>

          {/* Header Box 2 */}
          <div className="transactions-header-box">
            <div className="transactions-header-icon">
              <img src={logo} alt="Referrals Icon" />
            </div>
            <div className="transactions-header-text">
              Total Transactions Amount
            </div>
            <div className="transactions-header-number-box">
              <span>5</span>
            </div>
          </div>
        </div>
      )}

      {/* Table Header */}
      <div
        className="transactions-header"
        style={showHeaders ? {} : { marginTop: 62 }}
      >
        {filteredColumns.map((col, index) => (
          <div
            key={index}
            className={`transactions-header-col col-${col.name}`}
          >
            {col.header}
          </div>
        ))}
      </div>

      {/* Rows */}
      <div className="transactions-body">
        {currentRows.map((data, rowIndex) => (
          <div key={rowIndex} className="transactions-row">
            {filteredColumns.map((col, colIndex) => (
              <div
                key={colIndex}
                className={`transactions-row-col col-${col.name}`}
              >
                {col.row(data)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Pagination */}
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
