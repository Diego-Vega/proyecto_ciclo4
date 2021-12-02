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
import MessagePrompt from "../../Components/prompts/message";
// import CloseButton from "react-bootstrap/CloseButton";
import "./carrito.css";

export default class Carrito extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,
            carritoStorage: JSON.parse(localStorage.getItem("carritoCompra")),
            inc: 0.05,
            message: {
                text: "",
                show: true,
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
    }
    eliminarItem(id) {
        if (id === undefined) {
            console.error();
        }
        var carrito = localStorage.getItem("carritoCompra");
        var arr = JSON.parse(carrito);
        arr = arr.filter((item) => item.id !== id);
        localStorage.setItem("carritoCompra", JSON.stringify(arr));
        this.setState.carritoStorage = this.state.carritoStorage.filter(
            (item) => item.id !== id,
        );
        window.location.reload();
    }
    subTotal() {
        let sum = 0;
        this.state.carritoStorage.map(
            (producto) => (sum += parseFloat(producto.precio)),
        );
        return sum;
    }
    envio() {
        return this.subTotal() * this.state.inc;
    }
    totalFinal() {
        return this.subTotal() + this.envio();
    }
    onExitedMessage() {
        if (this.state.rediret) this.props.history.push("/productos");
    }
    comprar() {
        if (this.state.carritoStorage == "") {
            this.setState({
                rediret: false,
                message: {
                    text: "No hay productos en el carrito",
                    show: true,
                },
            });
        } else {
            this.setState({
                rediret: true,
                message: {
                    text: "Su pedido se ha realizado con exito!!",
                    show: true,
                },
            });
        }
    }
    render() {
        return (
            <Container className="tam">
                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />
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
                                                            {
                                                                producto.precio
                                                            }{" "}
                                                            COL
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
                                            $ {this.subTotal()} COL
                                        </div>
                                    </div>
                                    <div className="totals-item">
                                        <label>Envio:</label>
                                        <div
                                            className="totals-value"
                                            id="cart-shipping"
                                        >
                                            $ {this.envio()} COL
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="totals-item">
                                        <label>Total a Pagar:</label>
                                        <div
                                            className="totals-value"
                                            id="cart-total"
                                        >
                                            $ {this.totalFinal()} COL
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Button
                                            onClick={() => this.comprar()}
                                            // href="/login"
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
