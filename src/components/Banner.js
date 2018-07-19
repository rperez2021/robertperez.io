import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Hi, I'm Roberto Perez.</h1>
      <h3>
        I'm a San Diego based <span>web developer, </span>
        <span>freelancer, husband </span> and <span> dad</span> who loves to create great software and design amazing sites. Scroll down 
      
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
