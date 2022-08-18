import React from "react";
import HornedBeast from "./HornedBeast.js";
import data from "../data.json";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

console.log(data);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
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
      <Col key={value._id}>
        <HornedBeast
          key={value._id}
          value={value}
          name={value.title}
          image={value.image_url}
          description={value.description}
          handler={this.loveHornedBeast}
          />
        </Col>
    );
  });

  render() {
    return (
      <>
        <Container>
          <Row sm="1" md="2" lg="3">
            {this.beastItem}
          </Row>
        </Container>
        <main>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={this.state.image} width="300" alt={this.state.title} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </main>
      </>
    );
  }
}

export default Main;
