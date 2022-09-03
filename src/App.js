import React from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import data from "./data.json";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
    }
  }

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

render() {
  return (

    <>

      
      <Header className="Header" title="Horned Beasts" />
      <Main beastData={this.state.beastData} filterBeast={this.filterBeast} /> 
      <Footer />


    </>
  );
}};

export default App;