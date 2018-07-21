import React from "react";

import Modal from "react-modal";
import PortfolioModal from "./PortfolioModal"

import Coffee from "../assets/images/portfolio/coffee.jpg";
import Console from "../assets/images/portfolio/console.jpg";
import Judah from "../assets/images/portfolio/judah.jpg";
import IntoTheLight from "../assets/images/portfolio/into-the-light.jpg";
import Farmerboy from "../assets/images/portfolio/farmerboy.jpg";
import Girl from "../assets/images/portfolio/girl.jpg";
import Origami from "../assets/images/portfolio/origami.jpg";
import Retrocam from "../assets/images/portfolio/retrocam.jpg";

import SJDBLogo from "../assets/images/sjdblogo.jpg"
import BKitchenLogo from "../assets/images/bitchinkitchenlogo.png"
import IRLGamersLogo from "../assets/images/irlgamerslogo.png"
import BrevityIsLogo from "../assets/images/brevityislogo.png"



const portfolioElements = [
  { id: 1, title: 'Brevity Is', url: "https://www.brevity-is.com", image: { BrevityIsLogo }, type: "Web Design Firm", desc: "My Company Website", tools: "HTML, CSS, JS" },
  { id: 2, title: 'SJDB Advocates', url: "http://www.sjdbadvocates.com", image: { SJDBLogo }, type: "Small Business Website", desc: "Small Business Client", tools: "HTML, CSS, JS" },
  { id: 3, title: 'Bitchin Kitchen', url: "https://bitchin-kitchen.herokuapp.com/", image: { BKitchenLogo }, type: "Single Page App", desc: "Meal Prepping Application", tools: "Heroku, Postgres, Express, Node, React, Webpack, Firebase" },
  { id: 4, title: 'IRL Gamers', url: "http://www.irlgamers.com", image: { IRLGamersLogo }, type: "Single Page App", desc: "Game and Event Scheduling Application", tools: "Mongoose, Express, React, Node, Redux, Webpack, Firebase" }
]

export class Portfolio extends React.Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {
                portfolioElements.map(function(data, index) {
                  return (
                    <PortfolioModal key={data.id} data={data} />
                  )
                })
              }






            </div>
          </div>
        </div>
      </section>

    )
  }

}


export default Portfolio;
