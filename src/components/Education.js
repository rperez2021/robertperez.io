import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>University of San Diego Extension</h3>
          <p className="info">
            Web Development Bootcamp
            <span>&bull;</span>
            <em className="date">July 2018</em>
          </p>

          <p>
            Completed a 6 month Web Development Boot Camp to polish my skills and learn new technologies. 
            Also created several projects with my classmates such as <span> Bitchin Kitchen </span> and <span> IRL </span>. 
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>San Diego Mesa College</h3>
          <p className="info">
            A.S. Science Studies
            <span>&bull;</span>
            <em className="date">June 2010</em>
          </p>

          <p>
            Completed UC Transfer coursework for a physics major. Life happened, didnt transfer.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
