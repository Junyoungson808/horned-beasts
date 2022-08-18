import React from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Form from "./components/Form.js"
import List from "./components/List.js"


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: '',
      // people: names,
    }
  }

  // handleChange = (event) => {
  //   let filter = event.target.value.toLowerCase();
  //   let filteredListOfPeople = names.filter( n => n.toLowerCase().includes(filter))
  //   this.setState( {people: filteredListOfPeople});
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("You submitted the form!");
  // }

render() {
  return (

    <>

      
      <Header className="Header" title="Horned Beasts" />
      <Main /> 
      <Footer />
      {/* <Form changeHandler={this.handleChange} SubmitHandler={this.handleSubmit} />
      <List items={this.state.people} /> */}


    </>
  );
}};

export default App;