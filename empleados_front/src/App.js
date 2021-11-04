import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./Components/Login";

function App() {
    return (
        <div className="App">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Login/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
