import React from "react";
import "../style/style.css";
import ContentSlider from "../components/ContentSlider/ContentSlider";

import TokenSale from "../components/TokenSale/TokenSale";
import Transactions from "../components/Transactions/Transactions";

const DashboardHome = () => {
  return (
    <div className="dashboard-page dashboard-flex ">
      <ContentSlider />

      {/* Row 3 - Two Columns */}
      <div className="dashboard-row two-columns">
        {/* style={{ height: "906px" }} */}
        <div className="dashboard-column-nonorder mobileBottomMargine">
          {/* Content for Row 3 - Column 2 */}
          <Transactions
            title="Live Orders"
            columnsToShow={[
              "Coin",
              "OrderId",
              "Amount",
              "Price",
              "Value",
              "TimeAgo",
            ]}
            showHeaders={false}
            showPagination={false} // Toggle pagination
            rowsPerPage={11} // Set number of rows per page
          />
        </div>

        <div className="">
          {/* Content for Row 3 - Column 1 */}
          <TokenSale />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
