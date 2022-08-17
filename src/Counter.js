import React from "react";

class Counter extends React.Component {





// decrement = (e) => {
//     let nextState = {
//         count: this.state.count + 1
//     };
//         this.setState(nextState);
//     };

    render() {
        return (
            
            <div onClick={this.props.theCounter}>
            <div> {this.props.count} </div>
            </div>

        )
    }
};

export default Counter;