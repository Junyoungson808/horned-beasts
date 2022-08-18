import React from "react";
import Counter from './Counter.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/HornedBeast.css'

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            count:0
        }
    }
    
    increment = () => {
        // let nextState = {
        //     count: this.state.count + 1
        // }
        // this.setState(nextState);
        
        this.setState( {count: this.state.count +1 });
        this.props.handler( this.props.value.name )
    } 

    render() {

        return (

            <div className="item">
            <h2 className="Font">{this.props.name}</h2>
            <img src={this.props.image} width="300" height="250" alt={this.props.title} />
            <p className="DescriptionHTML">{this.props.description}</p>
            <Counter theCounter={this.increment} theCount={this.state.count}/>

            </div>

        )
    }
}

export default HornedBeast;