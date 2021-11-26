import { Row } from "react-bootstrap";
import { Col, ListGroup } from "react-bootstrap";
import { Card, Dropdown } from "react-bootstrap";
import { Button, Container } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
import "./CarritoStyle.css";

const Carrito = () => {
  return (
    <Container className="tam">
      <Row>
        <Col>
          <Card>
            <ListGroup>
              <div>
                <ListGroup>
                  <ListGroup>imagen mamalona</ListGroup>
                  <ListGroup>
                    <ListGroup variant="flush">
                      Nombres: G2 SILLA
                      <br />
                      Precio: 9999 dolarucos
                      <br />
                      Total: 9999 dolarucos
                      <br />
                      Detalles: Con rueditas
                      <br />
                    </ListGroup>
                    <div>
                      <CloseButton className="chipR"></CloseButton>

                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" size="sm">
                          Cantidad
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item > 1 </Dropdown.Item>
                          <Dropdown.Item> 2 </Dropdown.Item>
                          <Dropdown.Item> 3 </Dropdown.Item>
                          <Dropdown.Item> 4 </Dropdown.Item>
                          <Dropdown.Item> 5 </Dropdown.Item>
                          <Dropdown.Item> 6 </Dropdown.Item>
                          <Dropdown.Item> 7 </Dropdown.Item>
                          <Dropdown.Item> 8 </Dropdown.Item>
                          <Dropdown.Item> 9 </Dropdown.Item>
                          <Dropdown.Item> 10 </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <hr></hr>
                  </ListGroup>
                </ListGroup>
              </div>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card>
            <Container className="pa-6">
              <div className="totals">
                <div className="totals-item">
                  <label>SubTotal de todos los Productos:</label>
                  <div className="totals-value" id="cart-subtotal">
                    $999999 COP
                  </div>
                </div>
                <div className="totals-item">
                  <label>Envio:</label>
                  <div className="totals-value" id="cart-shipping">
                    $999 COP
                  </div>
                </div>
                <hr></hr>
                <div className="totals-item">
                  <label>Total a Pagar:</label>
                  <div className="totals-value" id="cart-total">
                    $99999999 COP
                  </div>
                </div>
                <div className="text-center">
                  <Button variant="success" className="checkout">REALIZAR PEDIDO!!</Button>
                </div>
              </div>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Carrito;
