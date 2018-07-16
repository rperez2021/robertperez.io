import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Brevity Is</h3>
          <p className="info">
            Web Developer / Owner
            <span>&bull;</span>
            <em className="date">January 2018 - Present</em>
          </p>

          <p>
          Owner of Brevity Is a Web Development firm that provides web design and consulting services to businesses, individuals and non-profit organizations.
          </p>
          <p>
          <span>
          Full Stack Development Experience
          </span>
          <br />
          Managed relationships with a variety of clients to find technical solutions for their problems and provide excellent service. 
          <br />
          Experience with a variety of tech stacks LAMP / MERN

          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Allied Universal Security Services</h3>
          <p className="info">
            Client Manager
            <span>&bull;</span>
            <em className="date">January 2012 - March 2018</em>
          </p>

          <p>
          <li>Managed 42 client accounts and over 200 Security Professionals</li>
          <li>Generated 8 million in revenue and 2 million in profit</li>
          <li>Transitioned account portfolio through a large merger while retaining accounts and personnel.</li>
          <li>Provided excellent customer service and safety emergency training for officers and client personnel. </li>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
