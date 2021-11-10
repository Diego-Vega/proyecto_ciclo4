import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: "",
            pass: "",
        };
    }
    iniciarSesion() {
        alert(`usuario: ${this.state.usuario} -  password: ${this.state.pass}`);
    }
    render() {
        return (
            <Container id="login-container" style={{ marginTop: 150 }}>
                <Row>
                    <Col>
                        <Row>
                            <h1>Inicio de Sesión</h1>
                        </Row>
                        <Row>
                            <Col
                                sm="12"
                                xm="12"
                                md={{ span: 4, offset: 4 }}
                                lg={{ span: 4, offset: 4 }}
                                xl={{ span: 4, offset: 4 }}
                            >
                                <Form>
                                    <Form.Group>
                                        <Form.Label style={{ float: "left" }}>
                                            Usuario
                                        </Form.Label>
                                        <Form.Control
                                            onChange={(e) =>
                                                this.setState({
                                                    usuario: e.target.value,
                                                })
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label style={{ float: "left" }}>
                                            Contraseña
                                        </Form.Label>
                                        <Form.Control
                                            type="password"
                                            onChange={(e) =>
                                                this.setState({
                                                    pass: e.target.value,
                                                })
                                            }
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="primary"
                                        style={{
                                            marginTop: 20,
                                            width: "100%",
                                        }}
                                        onClick={() => {
                                            this.iniciarSesion();
                                        }}
                                    >
                                        Iniciar Sesión
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
