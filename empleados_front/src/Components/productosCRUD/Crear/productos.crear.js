import React from "react";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import Loading from "../../loading/Loading";
import { request } from "../../helper/helper";
import MessagePrompt from "../../prompts/message";

export default class ProductosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,
            message: {
                text: "",
                show: false,
            },
            loading: false,
            producto: {
                nombre: "",
                precio: "",
                especificacion: "",
                foto: "",
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
    }
    setValue(index, value) {
        this.setState({
            producto: {
                ...this.state.producto,
                [index]: value,
            },
        });
    }
    guardarProducto() {
        this.setState({ loading: true });
        request
            .post("/productos", this.state.producto)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    });
                }
                this.setState({ loading: false });
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }
    onExitedMessage() {
        if (this.state.rediret) this.props.changeTab("Buscar");
    }
    render() {
        return (
            <Container id="productos-crear-container">
                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />
                <Loading show={this.state.loading} />
                <Row>
                    <h2>Nuevo producto</h2>
                </Row>
                <Row>
                    <Form>
                        <Row>
                            <Col
                                sm="12"
                                xm="12"
                                md={{ span: 6 }}
                                lg={{ span: 6 }}
                                xl={{ span: 6 }}
                            >
                                <Form.Group
                                    className="py-3"
                                    controlId="formBasic"
                                >
                                    <Form.Label>Producto</Form.Label>
                                    <Form.Control
                                        onChange={(e) =>
                                            this.setValue(
                                                "nombre",
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Ingrese Producto"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="py-3"
                                    controlId="formBasic"
                                >
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control
                                        onChange={(e) =>
                                            this.setValue(
                                                "precio",
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Ingrese Precio"
                                    />
                                </Form.Group>
                            </Col>
                            <Col
                                sm="12"
                                xm="12"
                                md={{ span: 6 }}
                                lg={{ span: 6 }}
                                xl={{ span: 6 }}
                            >
                                <Form.Group
                                    className="py-3"
                                    controlId="formBasic"
                                >
                                    <Form.Label>Especificación</Form.Label>
                                    <Form.Control
                                        onChange={(e) =>
                                            this.setValue(
                                                "especificacion",
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Ingrese Descripción"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="py-3"
                                    controlId="formBasic"
                                >
                                    <Form.Label>Foto</Form.Label>
                                    <Form.Control
                                        onChange={(e) =>
                                            this.setValue(
                                                "foto",
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Ingrese URL"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button
                            variant="primary"
                            onClick={() => console.log(this.guardarProducto())}
                        >
                            Guardar
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
