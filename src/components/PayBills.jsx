import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

import "../styles/PayBills.css";

// Create Data for PayBills

const PayBillsData = [
  {
    label: "Aid Grants and Donations",
    link: "/paybills/aid-grants-and-donations",
  },
  { label: "Airtime and Data", link: "/paybills/airtime-and-data" },
  { label: "Airtime Top-up", link: "/paybills/airtime-top-up" },
  { label: "Associations and Societies", link: "/paybills/associations" },
  { label: "Betting, Lottery and Gaming", link: "/paybills/betting" },
  { label: "Cable TV", link: "/paybills/cable-tv" },
  { label: "Credit and Loans", link: "/paybills/credit-loans" },
];

const PayBills = () => {
  return (
    <section className="Pay-Bills">
      <div className="">
        <div className="col-md-4 Paybills-sec">
          {PayBillsData.map((paybills, index) => (
            <div key={index}>
              <Link to={paybills.link}>
                <button>{paybills.label}</button>
              </Link>
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
