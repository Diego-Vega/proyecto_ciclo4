import React from "react";
import {
    Row,
    Col,
    ListGroup,
    Card,
    // Dropdown,
    Button,
    Container,
    Image,
} from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
import "./carrito.css";

export default class Carrito extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carritoStorage: JSON.parse(localStorage.getItem("carritoCompra")),
        };
    }
    eliminarItem(id) {
        if (id == undefined) {
            console.error();
        }
        var carrito = localStorage.getItem("carritoCompra");
        var arr = JSON.parse(carrito);
        arr = arr.filter((item) => item.id !== id);
        localStorage.setItem("carritoCompra", JSON.stringify(arr));
        this.setState.carritoStorage = this.state.carritoStorage.filter(
            (item) => item.id != id,
        );
        window.location.reload();
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
                                        {this.state.carritoStorage.map(
                                            (producto) => (
                                                <>
                                                    <ListGroup>
                                                        <Image
                                                            id="imagenCarrito"
                                                            src={producto.foto}
                                                        />
                                                    </ListGroup>
                                                    <ListGroup>
                                                        <ListGroup
                                                            className="pt-3"
                                                            variant="flush"
                                                        >
                                                            Nombre:{" "}
                                                            {producto.nombre}
                                                            <br />
                                                            Precio Unitario:{" "}
                                                            {producto.precio}
                                                            <br />
                                                            Detalles:{" "}
                                                            {
                                                                producto.especificacion
                                                            }
                                                            <br />
                                                            <br />
                                                        </ListGroup>
                                                        <div>
                                                            {/* <CloseButton className="chipR"></CloseButton> */}
                                                            {/* <Dropdown>
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
                                                            </Dropdown> */}
                                                            <Button
                                                                onClick={() =>
                                                                    this.eliminarItem(
                                                                        producto.id,
                                                                    )
                                                                }
                                                                variant="danger"
                                                            >
                                                                Eliminar
                                                            </Button>
                                                        </div>
                                                        <hr></hr>
                                                    </ListGroup>
                                                </>
                                            ),
                                        )}
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
