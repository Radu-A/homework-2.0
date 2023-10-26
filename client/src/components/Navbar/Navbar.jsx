import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import homeworkIcon from "../../assets/icons/homework-icon.png";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import SessionMenu from "./SessionMenu/SessionMenu";
import LoginButton from "./LoginButton/LoginButton";
import LogoutButton from "./LogoutButton/LogoutButton";

const Navbar = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 700px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 920px)",
  });
  const [dropdownMenuClass, setDropdownMenuClass] = useState(
    "dropdown-menu-article"
  );
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <nav>
        <article className="logo-article">
          <Link to="/" relative="" className="homework-logo-link">
            <h2>HOMEWORK</h2>
          </Link>
          <Link to="/" relative="" className="homework-logo-link">
            <img src={homeworkIcon} alt="homework icon" />
          </Link>

          {isTablet && (
            <>
              <Link to="/" relative="" className="homework-logo-link">
                <div className="red-text-div">
                  <p>THE BRIDGE</p>
                  <p>STUDENTS PROJECTS</p>
                </div>
              </Link>
            </>
          )}
        </article>
        <article className="navbar-menu-article">
          {isAuthenticated ? (
            <>
              {isDesktop && <DesktopMenu />}
              <SessionMenu
                dropdownMenuClass={dropdownMenuClass}
                setDropdownMenuClass={setDropdownMenuClass}
              />
              {isDesktop && <LogoutButton />}
            </>
          ) : (
            <LoginButton />
          )}
        </article>
      </nav>

      {!isDesktop && <DropdownMenu dropdownMenuClass={dropdownMenuClass} />}
    </>
  );
};

export default Navbar;
