import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Import Images
import paymentCard from "../assets/paymentcard.png";

import "../styles/TransferEcash.css";

const TransferEcash = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [amount, setAmount] = useState("");

  const toggleAccordion = (accordionName) => {
    setExpandedAccordion(
      expandedAccordion === accordionName ? null : accordionName
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Amount:", amount);
  };

  return (
    <section className="TransferAccount">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 transferEcash">
            <div className="separator-line w-75"></div>
            <h4>Transfer Money</h4>
            <div className="separator-line w-75"></div>
            <div className="accordions-container">
              <div className="fund-my-ecash">
                <div className="accordion">
                  <div
                    className="accordion-heading w-75 d-flex justify-content-between"
                    onClick={() => toggleAccordion("fundMyEcash")}
                  >
                    <h6>Fund My eCash</h6>
                    <div className="d-flex">
                      {expandedAccordion === "fundMyEcash" ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </div>
                  </div>
                  {expandedAccordion === "fundMyEcash" && (
                    <div className="accordion-body">
                      <form
                        onSubmit={handleSubmit}
                        className="mt-3 w-75 main-form"
                      >
                        <h6>Fund My eCash</h6>
                        <p className="p-2" style={{ fontSize: "8px" }}>
                          ATM Code <strong>042107223</strong> | USSD Code{" "}
                          <strong>*723*042107223*Amount#</strong>
                        </p>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="amount"
                            placeholder="Amount"
                            onChange={(e) => setAmount(e.target.value)}
                            required
                          />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                          Continue
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>

              <div className="fund-other-cash">
                <div className="accordion">
                  <div
                    className="accordion-heading w-75 d-flex justify-content-between"
                    onClick={() => toggleAccordion("fundOtherEcash")}
                  >
                    <h6>Fund other eCash</h6>

                    <div>
                      {expandedAccordion === "fundOtherEcash" ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </div>
                  </div>
                  {expandedAccordion === "fundOtherEcash" && (
                    <div className="accordion-body">
                      <form
                        onSubmit={handleSubmit}
                        className="mt-3 w-75 main-form"
                      >
                        <p>Fund My eCash</p>
                        <p className="p-2" style={{ fontSize: "8px" }}>
                          ATM Code <strong>042107223</strong> | USSD Code{" "}
                          <strong>*723*042107223*Amount#</strong>
                        </p>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="amount"
                            placeholder="Amount"
                            onChange={(e) => setAmount(e.target.value)}
                            required
                          />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                          Continue
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={paymentCard} alt="Payment Card" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferEcash;
