import React from "react";
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
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: "Usuario",
            contador: "0",
        };
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
                    <Navbar.Brand href="/productos">
                        <Image
                            src="https://i.pinimg.com/736x/28/f1/a9/28f1a972e13e4281b5273891ead173eb.jpg"
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
                            <Nav.Link href="/inicio">Inicio</Nav.Link>
                            <Nav.Link href="/listaproductos">Listado</Nav.Link>
                            <Nav.Link href="#pricing">Acerda de</Nav.Link>
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
                                <Nav.Link href="#home" id="carrito">
                                    <span className="badge rounded-pill badge-notification bg-danger">
                                        {this.state.contador}
                                    </span>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </Nav.Link>
                                <NavDropdown
                                    id="menuUser"
                                    title={
                                        <Image
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
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
                                    <NavDropdown.Item href="#action/3.2">
                                        Perfil
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Cerrar Sesión
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/login" id="login">
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
