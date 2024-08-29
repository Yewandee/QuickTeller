import React, { useState, useEffect } from "react";
import "../styles/BuyAirtimeData.css";
// Import Images
import paymentCard from "../assets/paymentcard.png";
import Mtn from "../assets/mtn.jpg";
import Airtel from "../assets/airtel.jpg";
import Etisalat from "../assets/etisalat.jpg";
import Glo from "../assets/glo.jpg";
import Nigeria from "../assets/nigeria.png";
import Kenya from "../assets/kenya.png";
import Gambia from "../assets/gambia.png";
import { PhoneAndroid } from "@mui/icons-material";

// Provider Data
const ProviderData = {
  Nigeria: [
    { icon: Mtn, name: "MTN" },
    { icon: Airtel, name: "Airtel" },
    { icon: Etisalat, name: "Etisalat" },
    { icon: Glo, name: "Glo" },
  ],
  Kenya: [
    { name: "Safaricom" },
    { name: "Airtel" },
    { name: "Equitel" },
    { name: "Telkom Kenya" },
  ],
  Gambia: [
    { name: "Africell" },
    { name: "Gamcel" },
    { name: "QCell" },
    { name: "Comium" },
  ],
};

// Country Data
const CountryData = {
  Nigeria: { flag: Nigeria, currency: "₦" },
  Kenya: { flag: Kenya, currency: "K" },
  Gambia: { flag: Gambia, currency: "D" },
};

const BuyAirtimeData = () => {
  const [selectCountry, setSelectCountry] = useState("Nigeria");
  const [purchaseType, setPurchaseType] = useState("");
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProviderChange = (provider) => {
    setSelectedProvider(provider);
  };

  const handleCountryChange = (event) => {
    setSelectCountry(event.target.value);
    setSelectedProvider(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Provider:", selectedProvider);
    console.log("Mobile Number:", mobileNumber);
    console.log("Amount:", amount);
  };

  return (
    <section className="BuyAirtimeData">
      <div className="container">
        <div className="row">
          <div
            className={`col-md-6 d-flex flex-column align-items-center buyAirtime_first ${
              scrolled ? "scrolled" : ""
            }`}
          >
            <div className="separator-line w-100"></div>
            <div className="chooseCountry  d-flex">
              <PhoneAndroid />
              <h4>Buy Airtime & Mobile Data</h4>

              <div>
                <select
                  id="country"
                  className="form-select"
                  value={selectCountry}
                  onChange={handleCountryChange}
                  style={{
                    backgroundImage: `url(${CountryData[selectCountry].flag})`,
                  }}
                >
                  {Object.keys(ProviderData).map((country) => (
                    <option key={country} value={country}>
                      <img
                        src={CountryData[country].flag}
                        alt={country}
                        style={{ width: "20px", marginRight: "8px" }}
                      />
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="separator-line w-100"></div>

            <div className="btn-group-vertical mb-3 w-75">
              <button
                type="button"
                className={`btn btn-outline-primary ${
                  purchaseType === "airtime" ? "active" : ""
                }`}
                onClick={() => setPurchaseType("airtime")}
              >
                Buy Airtime
              </button>
              <button
                type="button"
                className={`btn btn-outline-primary ${
                  purchaseType === "data" ? "active" : ""
                }`}
                onClick={() => setPurchaseType("data")}
              >
                Buy Data
              </button>
            </div>

            {/* --------- BUY AIRTIME -------- */}
            {purchaseType === "airtime" && (
              <form onSubmit={handleSubmit} className="mt-3 w-75 main-form">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <span>Network Provider</span>
                  <div className="d-flex flex-wrap align-items-center">
                    {ProviderData[selectCountry].map((provider) => (
                      <button
                        key={provider.name}
                        type="button"
                        className={`btn btn-light m-2 ${
                          selectedProvider === provider.name
                            ? "border-primary"
                            : ""
                        }`}
                        onClick={() => handleProviderChange(provider.name)}
                      >
                        {provider.icon && (
                          <img
                            src={provider.icon}
                            alt={provider.name}
                            className="mb-2"
                            style={{ width: "40px", height: "40px" }}
                          />
                        )}
                        <br />
                        {provider.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    placeholder={`${CountryData[selectCountry].currency} Amount `}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Pay
                </button>
              </form>
            )}

            {/* ------- BUY DATA------- */}
            {purchaseType === "data" && (
              <form onSubmit={handleSubmit} className="mt-3 w-75 main-form">
                <h4>Buy Data</h4>
                <div className="mb-3">
                  <h4>Network Provider</h4>
                  <div className="d-flex flex-wrap align-items-center">
                    {ProviderData[selectCountry].map((provider) => (
                      <button
                        key={provider.name}
                        type="button"
                        className={`btn btn-light m-2  ${
                          selectedProvider === provider.name
                            ? "border-primary"
                            : ""
                        }`}
                        onClick={() => handleProviderChange(provider.name)}
                      >
                        {provider.icon && (
                          <img
                            src={provider.icon}
                            alt={provider.name}
                            className="mb-2"
                            style={{ width: "40px", height: "40px" }}
                          />
                        )}
                        <br />
                        {provider.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    placeholder={`Amount (${CountryData[selectCountry].currency})`}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Pay
                </button>
              </form>
            )}
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={paymentCard} alt="Payment Card" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyAirtimeData;
