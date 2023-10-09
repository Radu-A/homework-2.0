import homeworkIcon from "../../assets/icons/homework-icon.png";
import { useMediaQuery } from "react-responsive";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

const Navbar = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  return (
    <nav>
      <article className="logo-article">
        <h2>HOMEWORK</h2>
        <img src={homeworkIcon} alt="homework icon" />
        <div className="red-text-div">
          <p>THE BRIDGE</p>
          <p>STUDENTS PROJECTS</p>
        </div>
      </article>
      {isDesktop ? <DesktopMenu /> : <MobileMenu />}
    </nav>
  );
};

export default Navbar;
