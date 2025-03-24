import "../style/components/NavigationBar.css";
import appLogo from "../assets/walled-logo.png";
import themeToggleIcon from "../assets/mode.png";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navigation-container">
      <img
        src={appLogo}
        height="40px"
        className="logo-clickable"
        alt="App Logo"
      />
      <div className="navigation-links">
        <Link to="/" className="nav-item">
          Dashboard
        </Link>
        <Link to="/transfer" className="nav-item">
          Transfer
        </Link>
        <Link to="/topup" className="nav-item">
          Top Up
        </Link>
        <Link to="/login" className="nav-item">
          Logout
        </Link>
        <div className="separator-line" />
        <a href="#" className="nav-item theme-toggle">
          <img
            src={themeToggleIcon}
            height="26px"
            width="26px"
            alt="Toggle Theme"
          />
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;
