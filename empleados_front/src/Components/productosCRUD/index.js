import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import ProductosBuscar from "./Buscar/productos.buscar";
import ProductosCrear from "./Crear/productos.crear";
import "./productosCRUD.css";

export default class ProductosCRUD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "Buscar",
        };
    }
    changeTab(tab) {
        this.setState({ currentTab: tab });
    }
    render() {
        return (
            <Container id="productos-container">
                <Row>
                    <Nav
                        fill
                        variant="tabs"
                        defaultActiveKey="Buscar"
                        onSelect={(eventKey) =>
                            this.setState({ currentTab: eventKey })
                        }
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="Buscar">Buscar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Crear">Crear</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === "Buscar" ? (
                        <ProductosBuscar />
                    ) : (
                        <ProductosCrear
                            changeTab={(tab) => this.changeTab(tab)}
                        />
                    )}
                </Row>
            </Container>
        );
    }
}
