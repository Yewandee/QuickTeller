import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import "../styles/SendRecieve.css";

const SendReceive = ({ showDashboard }) => {
  return (
    <section className="send-recieve-money">
      <div className="">
        <div className="">
          <div className="col-md-4 Send-recieve">
            <p>Send Money</p>
            <button onClick={() => showDashboard("account")}>
              Transfer to Account
            </button>
            <ChevronRightIcon />


            <button>Transfer to eCash</button> <ChevronRightIcon />
            <div className="separator-line w-75"></div>
            <p>Recieve Money</p>
            <button>Transfer to Link</button> <ChevronRightIcon />
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </section>
  );
};

export default SendReceive;
