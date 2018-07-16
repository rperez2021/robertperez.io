import React from "react";
import {
  FaMedium,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://github.com/rperez2021">
        <FaGithub />
      </a>
    </li>

    <li>
      <a href="https://twitter.com/smartassrob">
        <FaTwitter />
      </a>
    </li>

    <li>
      <a href="https://www.instagram.com/rpeereez/">
        <FaInstagram />
      </a>
    </li>

     <li>
      <a href="https://medium.com/@rob.perez.flores">
        <FaMedium />
      </a>
    </li>

    <li>
      <a href="mailto:rob.perez.flores@gmail.com">
        <FaEnvelope />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
