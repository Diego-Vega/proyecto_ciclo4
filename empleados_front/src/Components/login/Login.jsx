import React from "react";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import "./Login.css";

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
            <Container id="login-container">
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
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control
                                            onChange={(e) =>
                                                this.setState({
                                                    usuario: e.target.value,
                                                })
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Contraseña</Form.Label>
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
                    {/* <Col>
                        <Image
                            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                            roundedCircle
                            height="auto"
                            alt=""
                            loading="lazy"
                        />
                    </Col> */}
                </Row>
            </Container>
        );
    }
}
