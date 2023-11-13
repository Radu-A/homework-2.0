import { useAuth0 } from "@auth0/auth0-react";
import messageIcon from "../../../assets/icons/comment-blue.svg";
import alertIcon from "../../../assets/icons/alert-blue.svg";

const SessionMenu = ({ dropdownMenuClass, setDropdownMenuClass }) => {
  const { isAuthenticated, user } = useAuth0();

  const handleClick = (event) => {
    event.preventDefault();
    if (dropdownMenuClass === "dropdown-menu-article") {
      setDropdownMenuClass(
        "dropdown-menu-article dropdown-menu-article-active"
      );
    } else {
      setDropdownMenuClass("dropdown-menu-article");
    }
  };
  return (
    <ul className="session-menu-list">
      <li className="session-item">
        <a href="" className="session-link">
          <img src={messageIcon} alt="" className="session-icon-img" />
        </a>
      </li>
      <li className="session-item">
        <a href="" className="session-link">
          <img src={alertIcon} alt="" className="session-icon-img" />
        </a>
      </li>
      <li className="avatar-item">
        {isAuthenticated && (
          <a href="" className="avatar-link" onClick={handleClick}>
            <img
              src={user.picture}
              alt=""
              className="avatar-img"
            />
          </a>
        )}
      </li>
    </ul>
  );
};

export default SessionMenu;
