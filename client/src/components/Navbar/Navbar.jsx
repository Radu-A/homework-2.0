import homeworkIcon from "../../assets/icons/homework-icon.png";
import { useMediaQuery } from "react-responsive";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import UserMenu from "./UserMenu/UserMenu";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

const Navbar = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 825px)",
  });

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
        <UserMenu />
      </article>
      <DropdownMenu />
    </nav>
  );
};

export default Navbar;
