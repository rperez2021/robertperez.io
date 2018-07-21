import React from "react";
import { FaChevronCircleDown } from "react-icons/lib/fa";
import { Link } from 'react-scroll';

const ScrollDown = () => (
  <p className="scrolldown">
    <Link activeClass="active" className="test1" to="about" spy={true} smooth={true} duration={500} >
      <FaChevronCircleDown />
    </Link>
  </p>
);

export default ScrollDown;
