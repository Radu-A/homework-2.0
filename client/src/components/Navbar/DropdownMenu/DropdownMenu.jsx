import React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import { Link } from "react-router-dom";

const DropdownMenu = ({ dropdownMenuClass }) => {
  return (
    <article className={dropdownMenuClass}>
      <ul className="dropdown-menu-list">
        <li className="dropdown-menu-item">
          <Link to="/" className="dropdown-menu-link">
            Community
          </Link>
        </li>
        <li className="dropdown-menu-item">
          <Link to="/dashboard" className="dropdown-menu-link">
            Dashboard
          </Link>
        </li>
        <li className="dropdown-menu-item">
          <Link to="/profile" className="dropdown-menu-link">
            Profile
          </Link>
        </li>
      </ul>
      <div className="signout-div">
        <LogoutButton />
      </div>
    </article>
  );
};

export default DropdownMenu;
