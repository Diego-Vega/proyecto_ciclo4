import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./inicio.css";

class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="titulo">
                <h1>Bienvenidos</h1>
                <Row>
                    <Col
                    >
                        <Image
                            src="http://cdn.shopify.com/s/files/1/0043/6384/5720/articles/tienda-abarrotes-001_1024x1024.jpg?v=1571777316"
                            alt="Tienda con vendedor"
                            loading="lazy"
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Inicio;
