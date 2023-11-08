// Images
import { useMediaQuery } from "react-responsive";
import cyberCard from "../../assets/images/card-cyber-security.svg";
import dataCard from "../../assets/images/card-data-science.svg";
import fullCard from "../../assets/images/card-full-stack.svg";
import uxCard from "../../assets/images/card-ux-ui.svg";

const ScreenshotSection = ({ projectDetails }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 700px)" });

  let imgSmall = projectDetails.img_small;

  if (!imgSmall) {
    if (projectDetails.bootcamp === "Cybersecurity") {
      imgSmall = cyberCard;
    } else if (projectDetails.bootcamp === "Data Science") {
      imgSmall = dataCard;
    } else if (projectDetails.bootcamp === "Full-Stack") {
      imgSmall = fullCard;
    } else {
      imgSmall = uxCard;
    }
  }
  return (
    <section className="screenshot-section">
      <img className="screenshot-big" src={projectDetails.img_big} alt="" />
      {isTablet && <img className="screenshot-small" src={imgSmall} alt="" />}
    </section>
  );
};

export default ScreenshotSection;
