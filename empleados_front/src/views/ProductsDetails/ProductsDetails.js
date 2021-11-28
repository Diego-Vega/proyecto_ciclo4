import React from "react";
import { Button, Badge, Container } from "react-bootstrap";
import "./ProductsDetailsStyle.css";

export default class ProductosDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container>
                <div className="product-details">
                    <font face="Comic Sans MS,arial,verdana">
                        <b>G2 Silla</b>
                    </font>
                    <i className="information">
                        "La poderosisima Silla de G2, los mejores se han sentado
                        en esta silla Como MixWell, Koldamente, Nukye, grandes
                        jugadores profesionales de G2. Firmada por el mismiso
                        Lucas Rojo. Con esta silla no tendras mas excusas asi
                        que pasaras de ser un completo fracaso en los E-Sport a
                        ser la estrella del Torneo."
                    </i>
                    <div className="control">
                        <div className="prueba">
                            <Button className="btn" variant="success">
                                {" "}
                                <span className="price">
                                    Por solo 999 dolarucos
                                </span>
                                <span className="buy">
                                    {" "}
                                    <Badge pill bg="dark">
                                        {" "}
                                        COMPRAR YA!!{" "}
                                    </Badge>{" "}
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="product-image">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0548/8554/8183/products/G2SL2021Chair-Front_900x.jpg?v=1628169262"
                        alt="Omar Dsoky"
                    ></img>
                    <div className="info">
                        <h2>DESCRIPCION MAMALONA</h2>
                        <ul>
                            <li>
                                <strong>Tamaño: </strong>XL
                            </li>
                            <li>
                                <strong>Color: </strong>Negro
                            </li>
                            <li>
                                <strong>Marca: </strong>G2
                            </li>
                            <li>
                                <strong>Soporta:</strong>1T de peso
                            </li>
                            <li>
                                <strong>Cuidados: </strong>No mojar
                            </li>
                            <li>
                                <strong>Vendedor: </strong>Benito
                            </li>
                            <li>
                                <strong>Detalles: </strong>Gamer, Ergonomica,
                                con rueditas
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        );
    }
}
