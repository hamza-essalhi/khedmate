import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import bannerImage from "../../images/banner.png";

import { Link } from "react-router-dom";

const Footer = () => {
  const authenticated = false;
  return (
    <footer className="main-footer">
      <div className="top">
        <img src={bannerImage} alt="" />
        
      </div>
      <div className="middel">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
          {!authenticated ? (
            <>
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Sign Up</Link>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="bottom">
        <div className="col">
          <FaFacebookSquare className="footer-icon"></FaFacebookSquare>
          <FaInstagramSquare className="footer-icon"></FaInstagramSquare>
          <FaWhatsappSquare className="footer-icon"></FaWhatsappSquare>
        </div>
        <div className="col">
          <h5>
            Copyright 2023@{" "}
            <a href="https://github.com/hamza-essalhi/">Hamza Essalhi</a> |{" "}
            <a href="https://github.com/IsmailR1bii?">Ismail Rabii</a>
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
