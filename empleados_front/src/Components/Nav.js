import React from "react";
import { Form, Button, InputGroup, Stack } from "react-bootstrap";

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="productos.html">
                    Mercado
                </a>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                    role="navigation"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                href="none"
                                onclick="alert('Proyecto Desarollado Por Jorge Rojas, Gustavo Ramirez, Julian Garzon, Javier Quintero, Diego vega')"
                            >
                                Acerca de
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="true"
                                href="login.html"
                            >
                                Ingresar
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="true"
                                href="registro.html"
                            >
                                Registrarse
                            </a>
                        </li>
                    </ul>
                    <Stack direction="horizontal">
                        <InputGroup>
                            <Form.Control
                                placeholder="Busqueda"
                                aria-label="Busqueda"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="success" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>
                    </Stack>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
