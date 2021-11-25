import React from "react";
import { Container, Row } from "react-bootstrap";

import DataGrid from "../../grid/Grid";

const columns = [
    {
        dataField: "_id",
        text: "ID",
        hidden: true,
    },
    {
        dataField: "nombre",
        text: "Nombre",
    },
    {
        dataField: "precio",
        text: "Precio",
    },
    {
        dataField: "especificacion",
        text: "Especificacion",
    },
    {
        dataField: "foto",
        text: "Foto",
    },
];
export default class ProductosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onClickEditButton = this.onClickEditButton.bind(this);
    }
    onClickEditButton(row) {
        this.props.setIdProducto(row._id);
        this.props.changeTab('Editar');
    }
    render() {
        return (
            <Container id="productos-buscar-container">
                <Row>
                    <h2>Buscar Productos</h2>
                </Row>
                <Row>
                    <DataGrid
                        url="/productos"
                        columns={columns}
                        showEditButton={true}
                        onClickEditButton={this.onClickEditButton}
                    />
                </Row>
            </Container>
        );
    }
}
