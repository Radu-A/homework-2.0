import React from "react";

const DropdownMenu = ({ dropdownMenuClass }) => {
  return (
    <article className={dropdownMenuClass}>
      <ul className="dropdown-menu-list">
        <li className="dropdown-menu-item">
          <a href="" className="dropdown-menu-link">
            Community
          </a>
        </li>
        <li className="dropdown-menu-item">
          <a href="" className="dropdown-menu-link">
            Dashboard
          </a>
        </li>
        <li className="dropdown-menu-item">
          <a href="" className="dropdown-menu-link">
            Profile
          </a>
        </li>
      </ul>
      <div className="signout-div">
        <a href="" className="signout-link">
          Sign Out
        </a>
      </div>
    </article>
  );
};

export default DropdownMenu;
