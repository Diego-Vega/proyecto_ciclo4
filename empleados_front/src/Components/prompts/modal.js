import React from "react";
import { Modal } from "react-bootstrap";

export default class ModalPrompts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
        
      <Modal id="mss" centered show={true} closeButton>
        <Modal.Body>
          <h4>Proyecto realizado por:</h4>
          <p>
            Diego Fernando Vega Muñoz
            <br />
            Jorge Eliecer Rojas Quiñones
            <br />
            Gustavo Adolfo Ramirez Aponte
            <br />
            Javier Felipe Florez
            <br />
            Julian David Garzon Caballero
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}
