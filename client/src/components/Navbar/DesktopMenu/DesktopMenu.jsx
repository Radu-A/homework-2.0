import React from "react";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  const server = import.meta.env.VITE_SERVER;

  return (
    <ul className="desktop-menu-list">
      <li className="desktop-menu-item">
        <Link to="/" className="desktop-menu-link">
          COMMUNITY
        </Link>
      </li>
      <li className="desktop-menu-item">
        <Link to="/dashboard" className="desktop-menu-link">
          DASHBOARD
        </Link>
      </li>
      <li className="desktop-menu-item">
        <Link to="/profile" className="desktop-menu-link">
          PROFILE
        </Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
