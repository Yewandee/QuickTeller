import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "../styles/PayBills.css";

// Create Data for PayBills

const PayBillsData = [
  {
    label: "Aid Grants and Donations",
    dashBoardData: "aid-grants-and-donations",
  },
  { label: "Airtime and Data", dashBoardData: "airtime-and-data" },
  { label: "Airtime Top-up", dashBoardData: "airtime-top-up" },
  { label: "Associations and Societies", dashBoardData: "associations" },
  { label: "Betting, Lottery and Gaming", dashBoardData: "betting"},
  { label: "Cable TV", dashBoardData: "cable-tv" },
  { label: "Credit and Loans", dashBoardData: "credit-loans"},
];

const PayBills = ({ showDashboard }) => {
  return (
    <section className="Pay-Bills">
      <div className="">
        <div className="col-md-4 Paybills-sec">
          {PayBillsData.map((paybills, index) => (
            <div key={index}>
              <button onClick={() => showDashboard(paybills.dashBoardData)}>
                {paybills.label}
              </button>
              <i>
                <ChevronRightIcon />
              </i>
            </div>
          ))}
        </div>
        <div className="col-md-6"></div>
      </div>
    </section>
  );
};

export default PayBills;
