import React from "react";
import {
    Container,
    Form,
    InputGroup,
    Navbar,
    Stack,
    Button
} from "react-bootstrap";

const Nav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
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
            </Container>
        </Navbar>
    );
};

export default Nav;
