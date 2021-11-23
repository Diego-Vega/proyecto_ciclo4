import React from "react";
import { request } from "../helper/helper";
import { Container, Row } from "react-bootstrap";
import "./empleadosbuscar.css";
import DataGrid from "../grid/Grid";





export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        request
            .get("/empleados")
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }
    render() {
        
        return (
            <Container id="empleados-buscar-container">
                <Row>
                    <h2>Buscar empleados</h2>
                </Row>
                <Row>
                    <DataGrid/>
                </Row>
            </Container>
        );
    }
}
