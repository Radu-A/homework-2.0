import License from "../../components/License/License";
import theBridgeLogo from "../../assets/icons/the-bridge-logo.png";

const Footer = () => {

  return (
    <footer>
      <a className="bridge-logo-link" href="https://www.thebridge.tech/">
        <img className="bridge-logo-img" src={theBridgeLogo} alt="" />
      </a>
      <License />
    </footer>
  );
};

export default Footer;
