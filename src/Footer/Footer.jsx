import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <p>
        Created by Noer Rohim &#169; 2024
      </p>
      <div className="sosmed">
        <a href="http://instagram.com/nr.him"><FontAwesomeIcon icon={faInstagram} /> nr.him </a>
        <a href="https://www.linkedin.com/in/rohim48/"><FontAwesomeIcon icon={faLinkedin} /> Noer Rohim </a>
      </div>
    </footer>
  );
};

export default Footer;
