import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ updateClasses }) => {
  const navigate = useNavigate();

  const { logout } = useAuth0();

  const manageLogout = async () => {
    const url = import.meta.env.VITE_CLIENT;
    await logout({
      openUrl() {
        window.location.replace(url);
      },
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    manageLogout();
    updateClasses(event);
    navigate("/");
  };

  return (
    <button className="log-button" onClick={handleClick}>
      Log Out
    </button>
  );
};

export default LogoutButton;
