import React from "react";
import { FaCloudDownload, FaFilePdfO, FaFileWordO } from "react-icons/lib/fa";
import { withPrefix } from "gatsby-link"

import profilePic from "../assets/images/tinified/rob_211.jpg";

const About = () => (
  <section id="about" name="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
        I’m a web developer who is interested in creating innovative software, business and technology solutions. 
        I have worked for large corporations and small businesses in a variety of fields and have transitioned into web development
        full time. 
        <br />
        I am a firm believer that through collaboration and communication anything is possible and that understanding the customers 
        needs is a large part of providing excellent customer service. 
        <br />
        Personally I am huge science fiction / fantasy nerd and recently became a dad. I love traveling the world with my wife and daughter
        and have the best dog-son a man could ask for. 
        <br />
        Also, I am a veteran, having served in the US Marine Corps from 2002 to 2006. 
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Roberto Perez</span>

                <br /> San Diego, CA
             
              <br />
              <span>(619)254-4227</span>
              <br />
              <span>rob.perez.flores@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href={withPrefix('static/roberto-perez-resume.pdf')} download className="button">
              <FaFilePdfO /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
