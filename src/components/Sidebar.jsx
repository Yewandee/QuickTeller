import { Home } from "@mui/icons-material";
import { People } from "@mui/icons-material";
import { PhoneAndroid } from "@mui/icons-material";
import { ThreeSixty } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__icon">
        <Link to="/" className="links">
          <span className="active">
            <Home />
            <p>Dashboard</p>
          </span>
        </Link>

        <span>
          <Link to="/transfer-money" className="links">
            <People />
            <p>Send/receive money</p>
          </Link>
        </span>

        <Link to="/buy-airtime" className="links">
          <span>
            <PhoneAndroid />
            <p>buy airtime &amp; mobile data</p>
          </span>
        </Link>

        <Link to="/paybills" className="links">
          <span>
            <ThreeSixty />
            <p>pay bills</p>
          </span>
        </Link>

        <span>
          <MoreHoriz />
          <p>more</p>
        </span>
      </div>
    </nav>
  );
};

export default Sidebar;
