import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import "../styles/SendRecieve.css";

const SendReceive = () => {
  return (
    <section className="send-recieve-money">
      <div className="">
        <div className="">
          <div className="col-md-4 Send-recieve">
            <p>Send Money</p>
            <Link to="/account">
              <button>
                Transfer to Account
              </button>
              <i>
                {" "}
                <ChevronRightIcon />
              </i>
            </Link>

            <Link to="/ecash">
              <button>Transfer to eCash</button>
              <i>
                <ChevronRightIcon />
              </i>
            </Link>

            <div className="separator-line w-75"></div>
            <p>Recieve Money</p>

            <Link to="/transferlink">
              <button>
                Transfer to Link
              </button>
              <i>
                {" "}
                <ChevronRightIcon />
              </i>
            </Link>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </section>
  );
};

export default SendReceive;
