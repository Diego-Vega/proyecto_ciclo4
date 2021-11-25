import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import ProductosBuscar from "./Buscar/productos.buscar";
import ProductosCrear from "./Crear/productos.crear";
import ProductosEditar from "./Editar/productos.editar";
import "./productosCRUD.css";

export default class ProductosCRUD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "Buscar",
            _id: null,
        };
        this.changeTab = this.changeTab.bind(this);
        this.setIdProducto = this.setIdProducto.bind(this);
        this.getIdProducto = this.getIdProducto.bind(this);
    }
    changeTab(tab) {
        this.setState({ currentTab: tab });
    }
    setIdProducto(id) {
        this.setState({ _id: id });
    }
    getIdProducto() {
        return this.state._id;
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
                        <ProductosBuscar
                            changeTab={this.changeTab}
                            setIdProducto={this.setIdProducto}
                        />
                    ) : this.state.currentTab === "Crear" ? (
                        <ProductosCrear changeTab={this.changeTab} />
                    ) : (
                        <ProductosEditar
                            changeTab={this.changeTab}
                            getIdProducto={this.getIdProducto}
                        />
                    )}
                </Row>
            </Container>
        );
    }
}
