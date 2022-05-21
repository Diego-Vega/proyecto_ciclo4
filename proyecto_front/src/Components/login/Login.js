import React from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { APIHOST as host } from "../../App.json";
import "./Login.css";
import { isNull } from "util";
import Cookies from "universal-cookie";
import { calculaExpiracionSesion } from "../helper/helper";
import Loading from "../loading/Loading";

const cookies = new Cookies();

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            usuario: "",
            pass: "",
        };
    }
    iniciarSesion() {
        this.setState({ loading: true });
        axios
            .post(`${host}/usuarios/login`, {
                usuario: this.state.usuario,
                pass: this.state.pass,
            })
            .then((response) => {
                if (isNull(response.data.token)) {
                    alert("Usuario y/o Contraseña incorrectas");
                } else {
                    cookies.set("_s", response.data.token, {
                        path: "/",
                        expires: calculaExpiracionSesion(),
                    });
                    alert("Inicio de sesión correcto!!!");
                    this.props.history.push("/listaproductos");
                }
                this.setState({ loading: false });
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            });
    }
    render() {
        return (
            <Container id="login-container">
                <Loading show={this.state.loading} />
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
