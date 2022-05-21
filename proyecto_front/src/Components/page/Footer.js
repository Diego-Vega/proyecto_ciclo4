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
                        
                    >
                        Grupo G-06
                    </a>{" "}
                    de Univalle.
                </p>
            </div>
        );
    }
}
