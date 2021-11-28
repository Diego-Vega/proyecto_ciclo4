import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./productos.css";
// import { request } from "../../Components/helper/helper";
import axios from "axios";
import { APIHOST as host } from "../../App.json";

export default class Productos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            data: [],
        };
    }
    // componentDidMount() {
    //     this.getData();
    // }
    // getData() {
    //     request
    //         .get("/productos")
    //         .then((response) => {
    //             this.setState({
    //                 rows: response.data.length,
    //                 data: response.data,
    //             });
    //             console.log(response.data);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // }
    getData() {
        axios.get(`${host}/productos`).then((response) => {
            this.setState({
                rows: response.data.length,
                data: response.data,
            });
            console.table(response.data);
        });
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <Container className="productos">
                <h1 className="my-5">Productos </h1>
                <Row>
                    <Col>
                        <Row xs={1} md={2} className="g-4">
                            {this.state.data.map((producto) => (
                                <Col>
                                    <Card>
                                        <Card.Link
                                        href="">
                                            <div id="imagen">
                                                <Card.Img
                                                    variant="top"
                                                    src={producto.foto}
                                                />
                                            </div>
                                        </Card.Link>
                                        <Card.Body>
                                            <Card.Title
                                                style={{ fontSize: "30px" }}
                                            >
                                                {producto.nombre}
                                            </Card.Title>
                                            <Card.Text>
                                                {producto.especificacion}
                                            </Card.Text>
                                            <Card.Text>
                                                <Button variant="success">
                                                    Comprar
                                                </Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
