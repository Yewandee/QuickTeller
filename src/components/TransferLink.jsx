import React from "react";
import "../styles/TransferLink.css";

// Import image
import Link from '../assets/Link.png'
const TransferLink = () => {
  return (
    <section className="TransferLink">
      <div className="TransferContainer justify-content-center">
        <h4 className="pb-2">Transfer Link</h4>

        <p className="p-2" style={{fontSize: "13px"}}>
          Why follow the money when the money can follow you? Accept payments
          from anyone, <br/> anywhere, anytime using Quickteller Transfer Link.
        </p>

        <img src={Link} alt="Link" className="w-75"/>

        <p className="p-2"><i style={{fontSize: "10px"}}>By clicking "Continue", you agree to our terms and conditions</i></p>

        <button type="submit" className="btn btn-primary ">
          Continue
        </button>
      </div>
    </section>
  );
};

export default TransferLink;
