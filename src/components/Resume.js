import React from "react";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";

const Resume = () => (
  <section id="resume">
    <Work />
    <Skills />
    <Education />
  </section>
);

export default Resume;
