import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div class="mx-auto container-fluid" id="pie">
                <p>
                    Este producto es desarrollado por el{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Diego-Vega/proyecto_ciclo4"
                    >
                        Grupo G-03
                    </a>{" "}
                    de Mintic 2022-G35.
                </p>
            </div>
        );
    }
}
