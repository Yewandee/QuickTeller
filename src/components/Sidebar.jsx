import { Home } from "@mui/icons-material";
import { People } from "@mui/icons-material";
import { PhoneAndroid } from "@mui/icons-material";
import { ThreeSixty } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
const Sidebar = ({ showDashboard }) => {
  return (
    <nav className="sidebar">
      <div className="sidebar__icon">
        <span className="active" onClick={() => showDashboard("Card")}>
          <Home />
          <p>Dashboard</p>
        </span>

        <span onClick={() => showDashboard("transfer-money")}>
          <People />
          <p>Send/receive money</p>
        </span>

        <span onClick={() => showDashboard("BuyAirtimeData")}>
          <PhoneAndroid />
          <p>buy airtime &amp; mobile data</p>
        </span>

        <span onClick={() => showDashboard("PayBills")}>
          <ThreeSixty />
          <p>pay bills</p>
        </span>
        <span>
          <MoreHoriz />
          <p>more</p>
        </span>
      </div>
    </nav>

    /* <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={nigeriaIcon} alt="Nigeria Icon" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  <img src={nigeriaIcon} alt="Nigeria Icon" /> Nigeria
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <img src={nigeriaIcon} alt="Nigeria Icon" /> Kenya
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <img src={nigeriaIcon} alt="Nigeria Icon" /> Gambia
                </a>
              </li>
            </ul>
          </div> */
  );
};

export default Sidebar;
