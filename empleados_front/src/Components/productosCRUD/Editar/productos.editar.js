import React from "react";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import Loading from "../../loading/Loading";
import { request } from "../../helper/helper";

export default class ProductosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idProducto: this.props.getIdProducto(),
            rediret: false,
            message: {
                text: "",
                show: "",
            },
            loading: false,
            productos: {
                nombre: "",
                precio: 0,
                especificacion: "",
                foto: "",
            },
        };
    }
    getproducto() {
        this.setState({ loadig: true });
        request
            .get(`/productos/${this.state.idProducto}`)
            .then((response) => {
                console.log(response);
                this.setState({ loading: true });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }
    setValue(index, value) {
        this.setState({
            productos: {
                ...this.state.productos,
                [index]: value,
            },
        });
    }
    guardarProducto() {
        this.setState({ loading: true });
        request
            .post("/productos", this.state.productos)
            .then((response) => {
                if (response.data.exito) {
                    this.props.changeTab("Buscar");
                }
                this.setState({ loading: false });
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }
    render() {
        return (
            <Container id="productos-crear-container">
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
