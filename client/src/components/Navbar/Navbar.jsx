import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import homeworkIcon from "../../assets/icons/homework-icon.png";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import SessionMenu from "./SessionMenu/SessionMenu";

const Navbar = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 825px)",
  });
  const [dropdownMenuClass, setDropdownMenuClass] = useState(
    "dropdown-menu-article"
  );

  return (
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
        {isDesktop && <DesktopMenu />}
        <SessionMenu
          dropdownMenuClass={dropdownMenuClass}
          setDropdownMenuClass={setDropdownMenuClass}
        />
      </article>
      {!isDesktop && <DropdownMenu dropdownMenuClass={dropdownMenuClass} />}
    </nav>
  );
};

export default Navbar;
