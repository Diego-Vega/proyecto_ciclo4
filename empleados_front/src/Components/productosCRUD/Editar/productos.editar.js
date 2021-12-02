import React from "react";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import Loading from "../../loading/Loading";
import { request } from "../../helper/helper";
import MessagePrompt from "../../prompts/message";
import ConfirmationPrompts from "../../prompts/confirmation";

export default class ProductosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idProducto: this.props.getIdProducto(),
            rediret: false,
            message: {
                text: "",
                show: false,
            },
            confirmation: {
                title: "Modificar Producto",
                text: "¿Desea guardar los cambios?",
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
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }
    componentDidMount() {
        this.getProducto();
    }
    getProducto() {
        this.setState({ loadig: true });
        request
            .get(`/productos/${this.state.idProducto}`)
            .then((response) => {
                this.setState({
                    producto: response.data,
                    loading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
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
            .put(`/productos/${this.state.idProducto}`, this.state.producto)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    });
                    // this.props.changeTab("Buscar");
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
    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        });
    }
    onConfirm() {
        this.setState(
            {
                confirmation: {
                    ...this.state.confirmation,
                    show: false,
                },
            },
            this.guardarProducto(),
        );
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
                <ConfirmationPrompts
                    text={this.state.confirmation.text}
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />
                <Loading show={this.state.loading} />
                <Row>
                    <h2>Editar producto</h2>
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
                                        value={this.state.producto.nombre}
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
                                        value={this.state.producto.precio}
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
                                        value={
                                            this.state.producto.especificacion
                                        }
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
                                        value={this.state.producto.foto}
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
                            onClick={() =>
                                this.setState({
                                    confirmation: {
                                        ...this.state.confirmation,
                                        show: true,
                                    },
                                })
                            }
                        >
                            Guardar cambios
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
