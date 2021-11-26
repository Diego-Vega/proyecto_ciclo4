import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ConfirmationPrompts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: "Confirmación",
            text: "¿Desea guardar los cambios?",
        };
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.show) this.setState({ show: true });
    }

    render() {
        return (
            <Modal show={this.state.show} centered>
                <Modal.Header>
                    <Modal.Title>{this.state.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{this.state.text}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => this.props.onCancel()}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => this.props.onConfirm()}
                    >
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
