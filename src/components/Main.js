import React from "react";
import HornedBeast from "./HornedBeast.js";
import data from "../data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectedBeast from "./SelectedBeast.js";
// import SelectedBeast from "./SelectedBeast.js";

console.log(data);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: "",
      show: false,
      selectedBeast: {},
    };
  }

  loveHornedBeast = (beast) => {
    this.handleOpen(beast);
    this.setState( {currentName: this.state.currentName})
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleOpen = (beast) => {
    this.setState({ show: true, selectedBeast: beast });
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
          beast={value}
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
            <SelectedBeast 
            selectedBeast = {this.state.selectedBeast}
            show = {this.state.show}
            handleClose={this.handleClose}/>
          </Row>

        </Container>
        <main>

        </main>
      </>
    );
  }
}

export default Main;
