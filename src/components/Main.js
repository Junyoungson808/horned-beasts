import React from "react";
import HornedBeast from "./HornedBeast.js";
import data from "../data.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SelectedBeast from "./SelectedBeast.js";
// import FilterForm from "./Form.js";

console.log(data);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: "",
      show: false,
      selectedBeast: {},
      beastData: data,
    };
  }

  loveHornedBeast = (beast) => {
    this.handleOpen(beast);
    this.setState({ currentName: this.state.currentName });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleOpen = (beast) => {
    this.setState({ show: true, selectedBeast: beast });
  };

  filterBeast = (event) => {
    let horns = event.target.value;
    if (horns === "1") {
      let newArr = data.filter(value => value.horns === 1);
      this.setState({ beastData: newArr });
    } else if (horns === "2") {
      let newArr = data.filter(value => value.horns === 2);
      this.setState({ beastData: newArr });
    } else if (horns === "3") {
      let newArr = data.filter(value => value.horns === 3);
      this.setState({ beastData: newArr });
    } else {
      this.setState({
        beastData: data
      })
    }
  };

  beastItem = this.props.beastData.map((value) => {
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
    console.log("this is beast data.................", this.state.beastData)
    return (
      <>
        <Form>
          <Form.Select onChange={this.filterBeast}>
            <option>Filter by amount of horn(s)</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="all">Three +</option>
          </Form.Select>
        </Form>

        <Container className="container1">
          <Row sm="1" md="2" lg="3">
            {this.beastItem}
            <SelectedBeast
              selectedBeast={this.state.selectedBeast}
              show={this.state.show}
              handleClose={this.handleClose}
            />
          </Row>
        </Container>
        <main></main>
      </>
    );
  }
}

export default Main;
