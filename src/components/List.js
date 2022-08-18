import React from "react";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((person, index) => {
          <li key={index}>{person}</li>;
        })}
      </ul>
    );
  }
}

export default List;
