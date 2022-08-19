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
      currentName: "",
    };
  }

  loveHornedBeast = (beast) => {
    this.handleOpen();
    this.setState( {currentName: this.state.currentName})
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleOpen = () => {
    this.setState({ show: true });
  };

  beastItem = data.map((value) => {
    return (
      <Col id={value._id}>
        <HornedBeast
          image={value.image_url}
          title={value.title}
          description={value.description}
          keyword={value.keyword}
          horns={value.horns}
          handler={this.loveHornedBeast}
          value={value}
          />
        </Col>
    );
  });

  render() {
    return (
      <>
        <Container className="container1">
          <Row sm="1" md="2" lg="3">
            {this.beastItem}
          </Row>
        </Container>
        <main>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.currentName}</Modal.Title>
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
