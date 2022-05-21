import React, { useState } from "react";
import {
    Container,
    Form,
    InputGroup,
    Navbar,
    Stack,
    Button,
    Nav,
    NavDropdown,
    Image,
    Modal,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Cookies from "universal-cookie";

function Prueba() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Nav.Link onClick={handleShow} id="mss">
                Acerca de{" "}
            </Nav.Link>
            <Modal centered onHide={handleClose} show={show}>
                <Modal.Body>
                    <h4>Proyecto realizado por:</h4>
                    <p>
                        Gustavo Adolfo Ramirez Aponte
                        <br />
                        Wilson David Gomez Gomez
                        <br />
                        Dylan Antonio Yampuezan Motato
                    </p>
                    <Button
                        variant="primary"
                        id="btncerrar"
                        onClick={handleClose}
                    >
                        Cerrar
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

const cookies = new Cookies();
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: "Admin",
            contador: this.contador(),
            show: false,
        };
    }
    // cerrarSesion() {
    //     document.cookie = "_s=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //     window.location.reload();
    // }
    logout() {
        cookies.remove("_s");
        window.location.reload();
    }
    contador() {
        var carritoStorage = JSON.parse(localStorage.getItem("carritoCompra"));
        return Object.keys(carritoStorage).length;
    }
    render() {
        return (
            <Navbar
                fixed="top"
                id="navbar"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand href="/inicio">
                        <Image
                            src="https://myeasyshop.herokuapp.com/img/tienda_neg.0b231a3e.png"
                            roundedCircle
                            height="48"
                            alt=""
                            id="marcaImg"
                            loading="lazy"
                        />
                        My Shop Easy
                        <span id="usuario-sub-branm"></span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="pt-3" href="/productos">
                                Productos
                            </Nav.Link>
                            <Nav.Link
                                style={
                                    document.cookie === ""
                                        ? { display: "none" }
                                        : {}
                                }
                                className="pt-3"
                                href="/listaproductos"
                            >
                                Listado
                            </Nav.Link>
                            <Nav.Link>
                                <Prueba />
                            </Nav.Link>
                        </Nav>
                        <Stack direction="horizontal">
                            <InputGroup>
                                <Form.Control
                                    placeholder="Busqueda"
                                    aria-label="Busqueda"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="success">Buscar</Button>
                            </InputGroup>
                            <Nav className="me-auto">
                                <Nav.Link href="/carrito" id="carrito">
                                    <span className="badge rounded-pill badge-notification bg-danger">
                                        {this.state.contador}
                                    </span>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </Nav.Link>
                                <NavDropdown
                                    style={
                                        document.cookie === ""
                                            ? { display: "none" }
                                            : {}
                                    }
                                    id="menuUser"
                                    title={
                                        <Image
                                            src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png"
                                            roundedCircle
                                            height="48"
                                            alt=""
                                            loading="lazy"
                                        />
                                    }
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Header>
                                        {this.state.usuario}
                                    </NavDropdown.Header>
                                    <NavDropdown.Item href="/perfil">
                                        Perfil
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item
                                        onClick={() => {
                                            // this.cerrarSesion();
                                            this.logout();
                                        }}
                                    >
                                        Cerrar Sesión
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link
                                    style={
                                        document.cookie !== ""
                                            ? { display: "none" }
                                            : {}
                                    }
                                    href="/login"
                                    id="login"
                                >
                                    <h6>Login</h6>
                                </Nav.Link>
                            </Nav>
                        </Stack>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
