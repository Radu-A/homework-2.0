import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
// My components
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import SessionMenu from "./SessionMenu/SessionMenu";
import LoginButton from "./LoginButton/LoginButton";
import LogoutButton from "./LogoutButton/LogoutButton";
// Images
import homeworkIcon from "../../assets/icons/homework-icon.png";

const Navbar = () => {
  // variables
  const isTablet = useMediaQuery({
    query: "(min-width: 700px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 920px)",
  });
  const { isAuthenticated, user } = useAuth0();

  // states
  const [dropdownMenuClass, setDropdownMenuClass] = useState(
    "dropdown-menu-article"
  );
  const [layerDivClass, setLayerDivClass] = useState("layer-div");

  // functions
  const updateClasses = (event) => {
    event.preventDefault();
    console.log('holi')
    if (dropdownMenuClass === "dropdown-menu-article") {
      setDropdownMenuClass(
        "dropdown-menu-article dropdown-menu-article-active"
      );
      setLayerDivClass("layer-div layer-div-active");
    } else {
      setDropdownMenuClass("dropdown-menu-article");

      setLayerDivClass("layer-div");
    }
  };

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
              <SessionMenu updateClasses={updateClasses} />
              {isDesktop && <LogoutButton updateClasses={updateClasses} />}
            </>
          ) : (
            <LoginButton />
          )}
        </article>
        {!isDesktop && (
          <DropdownMenu
            dropdownMenuClass={dropdownMenuClass}
            layerDivClass={layerDivClass}
            updateClasses={updateClasses}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
