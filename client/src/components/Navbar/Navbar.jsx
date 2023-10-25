import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useAuth0 } from "@auth0/auth0-react";
import homeworkIcon from "../../assets/icons/homework-icon.png";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import SessionMenu from "./SessionMenu/SessionMenu";
import LoginButton from "./LoginButton/LoginButton";
import LogoutButton from "./LogoutButton/LogoutButton";

const Navbar = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 920px)",
  });
  const [dropdownMenuClass, setDropdownMenuClass] = useState(
    "dropdown-menu-article"
  );
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <nav>
        <article className="logo-article">
          <a href="" className="homework-logo-link">
            <h2>HOMEWORK</h2>
          </a>
          <img src={homeworkIcon} alt="homework icon" />

          {isDesktop && (
            <>
              <div className="red-text-div">
                <p>THE BRIDGE</p>
                <p>STUDENTS PROJECTS</p>
              </div>
            </>
          )}
        </article>
        <article className="navbar-menu-article">
          {isAuthenticated ?
          <>
          {isDesktop && <DesktopMenu />}
          <SessionMenu
            dropdownMenuClass={dropdownMenuClass}
            setDropdownMenuClass={setDropdownMenuClass}
          />
          <LogoutButton />
          </>
          :
          <LoginButton />
          }
        </article>
      </nav>

      {!isDesktop && <DropdownMenu dropdownMenuClass={dropdownMenuClass} />}
    </>
  );
};

export default Navbar;
