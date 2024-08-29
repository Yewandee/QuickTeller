import React from "react";
import Image from "../index.png";
import { Search } from "@mui/icons-material";
import { PermIdentity } from "@mui/icons-material";
import { Usb } from "@mui/icons-material";
import "../styles/Header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <p>MoneyXteller Paypoint</p>
      </div>
      <div className="header__bottom">
        <div className="header__logo">
          <img src={Image} alt="moneyx teller" />
        </div>
        <div className="header__search">
          <form action="">
            <span>
              <Search />
            </span>
            <input
              type="text"
              placeholder="Find a beneficiary or biller e.g. DSTV"
            />
          </form>
        </div>
        <div className="header__userProfile">
          <span>
            <Usb />
            <p>referrals</p>
          </span>
          <span>
            <PermIdentity />
            <p>Hi, Promise</p>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
