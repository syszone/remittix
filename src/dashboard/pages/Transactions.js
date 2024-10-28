import React from "react";
import Transactions from "../components/Transactions/Transactions";

const Leaderboard = () => {
  return (
    <div className="dashboard-page dashboard-flex">
      {/* Content for Row 3 - Column 1 */}
      <Transactions
        title="Recent Transactions"
        columnsToShow={[
          "Coin",
          "OrderId",
          "Amount",
          "Price",
          "Value",
          "TimeAgo",
        ]}
        showHeaders={true}
        showPagination={true} // Toggle pagination
        rowsPerPage={10} // Set number of rows per page
      />

      {/* You can add your leaderboard data here */}
    </div>
  );
};

export default Leaderboard;
