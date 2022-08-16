import React from "react";

class Item extends React.Component {

    render() {

        return (

            <div className="item">
            <h2>{this.props.name}</h2>   
            </div>

        )
    }
}

export default Item;