import React from "react";
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/lib/fa";
import { Link } from 'react-scroll'

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
         
          <li>
            Design by{" "}
            <a title="Styleshout" href="http://www.styleshout.com/">
              Styleshout
            </a>
          </li>
          <li>
            Developed in React ⚛️ by{" "}
            <a href="https://www.robertoperez.io">Roberto Perez</a>
          </li>
        </ul>
      </div>

      <div id="go-top">
      <Link activeClass="active" className="linkstyle" to="home" spy={true} smooth={true} duration={500} >
      <FaChevronCircleUp />
          </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
