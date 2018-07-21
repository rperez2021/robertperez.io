import React from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navigation = () => (
 
      <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap"/>
        <ul id="nav" className="nav">

        <li className="current">
        <Link activeClass="activelinkstyle" className="linkstyle" to="home" spy={true} smooth={true} duration={500} >
           Home
          </Link>
       </li>

        <li className="current">
        <Link activeClass="activelinkstyle" className="linkstyle" to="about" spy={true} smooth={true} duration={500} >
           About
        </Link>
       </li>

       <li className="current">
        <Link activeClass="activelinkstyle" className="linkstyle" to="resume" spy={true} smooth={true} duration={500} >
           Resume
        </Link>
       </li>

        <li className="current">
        <Link activeClass="activelinkstyle" className="linkstyle" to="portfolio" spy={true} smooth={true} duration={500} >
           Portfolio
        </Link>
       </li>


        </ul>
      </nav>
    )


export default Navigation;
