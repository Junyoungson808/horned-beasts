import React from "react";
import HornedBeast from "./HornedBeast.js";
import data from "../data.json";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../css/Main.css';

console.log(data);

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false
        }
      }

      loveHornedBeast = (beast) => {
        this.handleOpen();
      };
    
      handleClose = () => {
        this.setState({ show: false });
      };
    
      handleOpen = () => {
        this.setState({ show: true });
      };

  beastItem = data.map((value) => {
    return (
      <HornedBeast key={value._id}  value={value} name={value.title} image={value.image_url} description={value.description} handler={this.loveHornedBeast}
      />
    );
  });


  render() {
    return (
      <main>
        {this.beastItem}
        <Modal show={this.state.show} onHide={this.handleClose} >
        <Modal.Header closeButton>
        <Modal.Title>Hello</Modal.Title>
        </Modal.Header>
        <Modal.Body>BYE</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>
              Close
        </Button>
        </Modal.Footer>
        </Modal>
      </main>
    );
  }
}

export default Main;
