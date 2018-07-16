import React from "react";
import { FaHtml5 } from "react-icons/lib/fa"
import { 
  IoSocialHtml5Outline, 
  IoSocialNodejs, 
  IoSocialCss3Outline, 
  IoSocialJavascriptOutline,
  IoSocialWordpressOutline,
   } from "react-icons/lib/io"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        I considered putting skill bars below and although ocassionally I feel like I have leveld up, I also dont feel like I am an expert on anything,
        so I decided to split it into three categories. Tech I feel comfortable with, tech I feel I get the hang of and stuff I am still learning.
      </p>


      <div className="container">

        <h1>Yeah I got this...</h1>

        <div className="bgrid-quarters s-bgrid-thirds cf">
          <div className="bars">
            <ul className="skills">

              <div className="columns">
                <li>
                  <span className="bar-expand gothis"><IoSocialHtml5Outline/></span>
                  <em>HTML5</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis"><IoSocialCss3Outline/></span>
                  <em>CSS</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis"><IoSocialJavascriptOutline/></span>
                  <em>JavaScript</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis" />
                  <em>JQuery</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis"><IoSocialWordpressOutline/></span>
                  <em>Wordpress</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis"><IoSocialNodejs/></span>
                  <em>Nodejs</em>
                </li>
              </div>
            </ul>
          </div>
        </div>


      </div>


      <div className="container">

        <h1>I think I got this?</h1>

        <div className="bgrid-quarters s-bgrid-thirds cf">
          <div className="bars">
            <ul className="skills">

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit"><FontAwesomeIcon icon={faReact}/></span>
                  <em>React</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit" />
                  <em>Redux</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit" />
                  <em>PHP</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit" />
                  <em>SQL</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit" />
                  <em>MongoDB</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit" />
                  <em>Firebase</em>
                </li>
              </div>

               <div className="columns">
                <li>
                  <span className="bar-expand gettingit" />
                  <em>Linux</em>
                </li>
              </div>

               <div className="columns">
                <li>
                  <span className="bar-expand gettingit" />
                  <em>AWS</em>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="container">

          <h1>Still Learning</h1>

          <div className="bgrid-quarters s-bgrid-thirds cf">
            <div className="bars">
              <ul className="skills">

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning" />
                    <em>Elixir</em>
                  </li>
                </div>

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning" />
                    <em>Java</em>
                  </li>
                </div>

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning" />
                    <em>Webpack</em>
                  </li>
                </div>

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning" />
                    <em>Docker</em>
                  </li>
                </div>

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning" />
                    <em>Testing</em>
                  </li>
                </div>

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning" />
                    <em>Ruby</em>
                  </li>
                </div>
              </ul>
            </div>
          </div>


        </div>

      </div>

    </div>
  </div>
);

export default Skills;
