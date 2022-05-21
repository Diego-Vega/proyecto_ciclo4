import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login/Login";
import PrivateRoute from "../auth/PrivateRoute";
import Inicio from "../../views/inicio/Inicio";
import Productos from "../../views/productos/Productos";


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/inicio"]} component={Inicio} />
                <Route exact path={["/productos"]} component={Productos} />
                <Route exact path={["/login"]} component={Login} />
                
               
                
                <Route
                    path={"*"}
                    component={() => (
                        <h1 style={{ marginTop: 200 }}>
                            404
                            <br />
                            PÁGINA NO ENCONTRADA
                        </h1>
                    )}
                />
            </Switch>
        </Router>
    );
}
