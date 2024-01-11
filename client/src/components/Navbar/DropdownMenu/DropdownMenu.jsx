import LogoutButton from "../LogoutButton/LogoutButton";
import { Link, useNavigate } from "react-router-dom";

const DropdownMenu = ({ dropdownMenuClass, layerDivClass, updateClasses }) => {
  const navigate = useNavigate();

  const handleCommunityClick = (event) => {
    event.preventDefault();
    updateClasses(event);
    navigate("/");
  };

  const handleDashboardClick = (event)=> {
    event.preventDefault();
    updateClasses(event);
    navigate("/dashboard");
  }

  const handleProfileClick = (event)=> {
    event.preventDefault();
    updateClasses(event);
    navigate("/profile");
  }

  return (
    <>
      <article className={dropdownMenuClass}>
        <ul className="dropdown-menu-list">
          <li className="dropdown-menu-item">
            <Link to="/" className="dropdown-menu-link" onClick={handleCommunityClick}>
              Community
            </Link>
          </li>
          <li className="dropdown-menu-item">
            <Link to="/dashboard" className="dropdown-menu-link" onClick={handleDashboardClick}>
              Dashboard
            </Link>
          </li>
          <li className="dropdown-menu-item">
            <Link to="/profile" className="dropdown-menu-link" onClick={handleProfileClick}>
              Profile
            </Link>
          </li>
        </ul>
        <div className="signout-div">
          <LogoutButton updateClasses={updateClasses}/>
        </div>
      </article>
      <div className={layerDivClass} onClick={updateClasses}></div>
    </>
  );
};

export default DropdownMenu;
