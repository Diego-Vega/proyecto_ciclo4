import React from 'react';
import { Row, Col, ListGroup, Card, Dropdown, Button, Container } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
import "./carrito.css";

export default class Carrito extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Container className="tam">
            <Row>
                <Col>
                    <Card>
                        <ListGroup>
                            <div>
                                <ListGroup>
                                    <ListGroup>Imagen Producto</ListGroup>
                                    <ListGroup>
                                        <ListGroup variant="flush">
                                            Nombres: G2 SILLA
                                            <br />
                                            Precio: $499 dolarucos
                                            <br />
                                            Total: $499 dolarucos
                                            <br />
                                            Detalles: Con rueditas
                                            <br />
                                        </ListGroup>
                                        <div>
                                            <CloseButton className="chipR"></CloseButton>
                                            <Dropdown>
                                                <Dropdown.Toggle
                                                    id="dropdown-basic"
                                                    size="sm"
                                                >
                                                    Cantidad
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>
                                                        {" "}
                                                        1{" "}
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        {" "}
                                                        2{" "}
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        {" "}
                                                        3{" "}
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        {" "}
                                                        4{" "}
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        {" "}
                                                        5{" "}
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        {" "}
                                                        6{" "}
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        {" "}
                                                        7{" "}
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        {" "}
                                                        8{" "}
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        {" "}
                                                        9{" "}
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        {" "}
                                                        10{" "}
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <hr></hr>
                                    </ListGroup>
                                </ListGroup>
                            </div>
                        </ListGroup>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Container className="pa-6">
                            <div className="totals">
                                <div className="totals-item">
                                    <label>
                                        SubTotal de todos los Productos:
                                    </label>
                                    <div
                                        className="totals-value"
                                        id="cart-subtotal"
                                    >
                                        $499 USD
                                    </div>
                                </div>
                                <div className="totals-item">
                                    <label>Envio:</label>
                                    <div
                                        className="totals-value"
                                        id="cart-shipping"
                                    >
                                        $50 USD
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="totals-item">
                                    <label>Total a Pagar:</label>
                                    <div
                                        className="totals-value"
                                        id="cart-total"
                                    >
                                        $549 USD
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Button
                                        href="/login"
                                        variant="success"
                                        className="checkout"
                                    >
                                        REALIZAR PEDIDO!!
                                    </Button>
                                </div>
                            </div>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
        );
    }
}