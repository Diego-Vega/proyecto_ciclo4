import { Container, Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./RegistroUsuarioStyle.css";

const RegistroUsuario = () => {
  return (
    <>
      <Container className="prueba">
        <Form className="estilo">
          <Row>
            <Form.Group
              as={Col}
              controlId="formGridDocumento"
              md={{ offset: 1 }}
            >
              <Form.Label>NickName</Form.Label>
              <Form.Control type="NickName" placeholder="Nick" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNombre" >
              <Form.Label>Nombre Y Apellidos</Form.Label>
              <Form.Control type="nombre" placeholder="Nombre completo" />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group
              as={Col}
              controlId="formGridEmail"
              md={{ offset: 1 }}
            >
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" placeholder="estoes@ejemplo.com" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" >
              <Form.Label>Constraseña</Form.Label>
              <Form.Control type="password" placeholder="contraseña" />
            </Form.Group>
          </Row>

          <Button
            variant="primary"
            type="submit"
            className="btnRegistrar"
            
          >
            Registrar
          </Button>
        </Form>
      </Container>
      <div className="foto">
        <Row>
          <Col xs={3} md={1}>
            <Image
              src="https://images.vexels.com/media/users/3/137047/isolated/preview/5831a17a290077c646a48c4db78a81bb-icono-de-perfil-de-usuario-azul.png"
              rounded
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RegistroUsuario;
