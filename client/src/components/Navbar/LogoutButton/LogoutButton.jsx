import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const manageLogout = async () => {
    const url = import.meta.env.VITE_CLIENT;
    await logout({
      openUrl() {
        window.location.replace(url);
      },
    });
  };

  return (
    <button className="log-button" onClick={manageLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
