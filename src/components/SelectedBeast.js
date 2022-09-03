import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


class SelectedBeast extends React.Component {

    
  render() {

    return (

      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.selectedBeast.image_url} width="300" alt={this.props.selectedBeast.description} />
            <p>Description: {this.props.selectedBeast.description}</p>
            <p>Keyword: {this.props.selectedBeast.keyword}</p>
            <p>Horn(s): {this.props.selectedBeast.horns}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default SelectedBeast;
