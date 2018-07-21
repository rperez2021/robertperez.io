import React from "react";
import Modal from "react-modal";
import { FaPlus, FaTag } from "react-icons/lib/fa";
import Coffee from "../assets/images/portfolio/coffee.jpg";

Modal.setAppElement('#___gatsby');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '50%',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const modalStyle = {
  content : {
    borderRadius : '25',
    backgroundColor : 'blue',
  }
}

export class PortfolioModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };



    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (

      <div className="columns portfolio-item" style={modalStyle}>
        <div className="item-wrap" onClick={this.handleOpenModal}>

          <img alt="" src={this.props.data.image[Object.keys(this.props.data.image)[0]]} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{this.props.data.title}</h5>
              <p>{this.props.data.type}</p>
            </div>
          </div>
          <div className="link-icon">
            <FaPlus />
          </div>

        </div>


        <Modal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          style={customStyles}
        >
          
          <div className="portfolio-modal-image">
            <img alt="" src={this.props.data.image[Object.keys(this.props.data.image)[0]]} />
          </div>
          <h1>{this.props.data.title}</h1>
          <h2>{this.props.data.type}</h2>
          <p>{this.props.data.desc}</p>
          See Live Version At: <a href="{this.props.data.url}">{this.props.data.url}</a>
          <p>Created with: {this.props.data.tools}</p>
          <p>{this.props.data.collaborators}</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>


      </div>





    )
  }

}

export default PortfolioModal;