import React from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: '',

    }
  }


render() {
  return (

    <>

      
      <Header className="Header" title="Horned Beasts" />
      <Main /> 
      <Footer />


    </>
  );
}};

export default App;