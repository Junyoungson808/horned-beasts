import React from "react";


class Form extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.submitHandler}>
        <select onChange={this.props.changeHandler} />
        <input onChange={this.props.handleChange} />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;