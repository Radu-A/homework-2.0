import React from "react";

const DropdownMenu = () => {
  return (
    <article className="dropdown-menu-article">
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
      <a href="" className="signout-link">
        Sign Out
      </a>
    </article>
  );
};

export default DropdownMenu;
