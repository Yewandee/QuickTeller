import React, {useState} from "react";
// Import Images
import paymentCard from "../assets/paymentcard.png";

import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import '../styles/TransferAccount.css'

const TransferAccount = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Mobile Number:", mobileNumber);
    console.log("Amount:", amount);
  };
  return (
    <section className="TransferAccount">
      <div className="container">
        <div className="row">
          <div className="col-md-6 TransferAccount_one">
            <div className="separator-line w-75"></div>
            <div className="chooseCountry d-flex">
              <SocialDistanceIcon />
              <h6>Transfer Money</h6>
            </div>

            <div className="separator-line w-75" />

            <form onSubmit={handleSubmit} className="mt-3 w-75 main-form">
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="accountNumber"
                  placeholder="Account Number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Bank"
                  placeholder="Bank"
                  //   value={mobileNumber}
                  //   onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="BeneficiaryName"
                  placeholder="Beneficiary's Name"
                  //   value={mobileNumber}
                  //   onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  placeholder="Amount"
                  // placeholder={`${CountryData[selectCountry].currency} Amount `}
                //   value={amount}
                //   onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="mobileNumber"
                  placeholder="Beneficiary's Mobile Number"
                //   value={mobileNumber}
                //   onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Remark"
                  placeholder="Remark (e.g Transfer to ABC)"
                  //   value={mobileNumber}
                  //   onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Continue
              </button>
            </form>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={paymentCard} alt="Payment Card" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferAccount;
