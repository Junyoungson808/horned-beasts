import React from "react";
import Form from "react-bootstrap/Form";

class FilterForm extends React.Component {

// handleChange = (event) => {
//   let filter = event.target.value;
//   let filteredListofHorns = horns.filter(n => n.includes(filter))
//   this.setState({horns: filteredListofHorns });
// }


  render() {
    return (
      // <form onSubmit={this.props.submitHandler}>
      //   <select onChange={this.props.changeHandler} />
      //   <input onChange={this.props.handleChange} />
      //   <button type="submit">submit</button>
      // </form>

      <Form.Select aria-label="Default select example">
        <option>Filter by amount of horn(s)</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="3">Three +</option>
      </Form.Select>
    );
  }
}

export default FilterForm;
