import { Home, People, PhoneAndroid, ThreeSixty, MoreHoriz } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__icon">
        <span>
          <NavLink exact to="/" className="links" activeClassName="active">
            <Home />
            <p>Dashboard</p>
          </NavLink>
        </span>

        <span>
          <NavLink to="/transfer-money" className="links" activeClassName="active">
            <People />
            <p>Send/receive money</p>
          </NavLink>
        </span>

        <span>
          <NavLink to="/buy-airtime" className="links" activeClassName="active">
            <PhoneAndroid />
            <p>buy airtime & data</p>
          </NavLink>
        </span>

        <span>
          <NavLink to="/paybills" className="links" activeClassName="active">
            <ThreeSixty />
            <p>pay bills</p>
          </NavLink>
        </span>

        <span>
          <NavLink to="/more" className="links" activeClassName="active">
            <MoreHoriz />
            <p>more</p>
          </NavLink>
        </span>
      </div>
    </nav>
  );
};

export default Sidebar;
