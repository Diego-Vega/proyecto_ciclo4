import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./productos.css";
import axios from "axios";
import { APIHOST as host } from "../../App.json";

export default class Productos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            data: [],
        };
    }
    getData() {
        axios.get(`${host}/productos`).then((response) => {
            this.setState({
                rows: response.data.length,
                data: response.data,
            });
            console.table(response.data);
        });
    }
    componentDidMount() {
        this.getData();
    }
    añadirAlCarrito(producto) {
        if (!localStorage.getItem("carritoCompra")) {
            localStorage.setItem("carritoCompra", JSON.stringify([]));
        }
        var carritoStorage = JSON.parse(localStorage.getItem("carritoCompra"));
        var productoCarrito = {
            id: producto._id,
            nombre: producto.nombre,
            precio: producto.precio,
            foto: producto.foto,
            especificacion: producto.especificacion,
        };
        if (productoCarrito === undefined) {
            console.log("Error al agregar el producto al carrito");
        }
        if (carritoStorage == null) {
            carritoStorage = [];
        }
        if (Object.keys(carritoStorage).length === 0) {
            carritoStorage.push(productoCarrito);
        } else if (Object.keys(carritoStorage).length !== 0) {
            var validator = true;
            Object.keys(carritoStorage).forEach((key) => {
                if (carritoStorage[key].id === producto._id) {
                    validator = false;
                }
            });
            if (validator === true) {
                carritoStorage.push(productoCarrito);
            }
        }
        localStorage.setItem("carritoCompra", JSON.stringify(carritoStorage));
    }
    render() {
        return (
            <Container className="productos">
                <h1 className="my-5">Productos </h1>
                <Row>
                    <Col>
                        <Row xs={1} md={2} className="g-4">
                            {this.state.data.map((producto) => (
                                <Col>
                                    <Card>
                                        <div id="imagen">
                                            <Card.Img
                                                variant="top"
                                                src={producto.foto}
                                            />
                                            <div id="precio">
                                                <h3>Precio</h3>
                                                <span>$ {producto.precio}</span>
                                            </div>
                                        </div>
                                        {/* <Card.Link
                                        href="/detalles">
                                        </Card.Link> */}
                                        <Card.Body>
                                            <Card.Title
                                                style={{ fontSize: "30px" }}
                                            >
                                                {producto.nombre}
                                            </Card.Title>
                                            <Card.Text>
                                                {producto.especificacion}
                                            </Card.Text>
                                            <Card.Text>
                                                <Button
                                                    onClick={() =>
                                                        this.añadirAlCarrito(
                                                            producto,
                                                        )
                                                    }
                                                    href="/carrito"
                                                    variant="success"
                                                >
                                                    Comprar
                                                </Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
