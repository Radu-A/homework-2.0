import License from "../../components/License/License";
import theBridgeLogo from "../../assets/icons/the-bridge-logo.png";

const Footer = () => {

  return (
    <footer id="footer">
      <a className="bridge-logo-link" href="https://www.thebridge.tech/" target="blank">
        <img className="bridge-logo-img" src={theBridgeLogo} alt="" />
      </a>
      <License />
    </footer>
  );
};

export default Footer;
