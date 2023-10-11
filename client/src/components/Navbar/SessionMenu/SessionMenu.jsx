import messageIcon from "../../../assets/icons/message-circle.svg";
import alertIcon from "../../../assets/icons/bell.svg";

const SessionMenu = ({ dropdownMenuClass, setDropdownMenuClass }) => {
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
        <a href="" className="avatar-link" onClick={handleClick}>
          <img
            src="https://randomuser.me/api/portraits/women/35.jpg"
            alt=""
            className="avatar-img"
          />
        </a>
      </li>
    </ul>
  );
};

export default SessionMenu;
