import React from "react";
import "./inicio.css"

class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="titulo">
                <h1>Bienvenidos</h1>
            </div>
        );
    }
}

export default Inicio;
