import React from "react";
import Counter from './Counter.js'

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            count:0
        }
    }
    
    increment = (e) => {
        let nextState = {
            count: this.state.count + 1
        }
        this.setState(nextState);
    }

    render() {

        return (

            <div className="item">
            <h2>{this.props.name}</h2>
            <img src={this.props.image} width="300" alt={this.props.title} />
            <Counter theCounter={this.increment} count={this.state.count}/>

            </div>

        )
    }
}

export default HornedBeast;