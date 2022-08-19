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
        // let nextState = {count: this.state.count + 1}
        // this.setState(nextState);
        
        this.setState( {count: this.state.count +1 });
        this.props.handler( this.props.value.name )
    } 

    render() {

        return (
            <>
            <div className="item">
            <h2>{this.props.title}</h2>
            <img src={this.props.image} width="300" height="250" alt={this.props.title} />
            <p>Description: {this.props.description}</p>
            <p>Keyword: {this.props.keyword}</p>
            <p>Horns: {this.props.horns}</p>
            <Counter theCounter={this.increment} theCount={this.state.count}/>

            </div>
            </>
        )
    }
}

export default HornedBeast;