import { Button } from "bootstrap";
import React from "react";

class Counter extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        count:0
    }
}


increment = (e) => {
    let count = this.state.count +1;
    this.setState(nextState);
}

    render() {

        return(

            <button>-</button>
            <div>{this.state.count}</div>
            <button>+</button>


        )
    }
}

export default Counter;