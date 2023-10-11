import messageIcon from "../../../assets/icons/message-circle.svg";
import alertIcon from "../../../assets/icons/bell.svg";

const UserMenu = () => {
  return (
    <ul className="user-menu-list">
      <li className="user-item">
        <a href="" className="user-link">
          <img src={messageIcon} alt="" className="user-icon-img" />
        </a>
      </li>
      <li className="user-item">
        <a href="" className="user-link">
          <img src={alertIcon} alt="" className="user-icon-img" />
        </a>
      </li>
      <li className="avatar-item">
        <a href="" className="avatar-link">
          <img src="" alt="" className="avatar-img" />
        </a>
      </li>
    </ul>
  );
};

export default UserMenu;
