import React from "react";
import "./App.css";
// import { Container, Row, Col } from "react-bootstrap";
// import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Productos from "./Components/Productos";

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Productos></Productos>
            {/* <Row className="justify-content-md-center">
                <Col md="auto">
                    <Login/>
                </Col>
            </Row> */}
        </div>
    );
}

export default App;
