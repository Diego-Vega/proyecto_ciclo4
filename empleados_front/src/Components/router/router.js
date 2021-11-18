import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login/Login";
import PrivateRoute from "../auth/PrivateRoute";
import EmpleadosBuscar from "../empleados/empleados.buscar";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component={Login} />
                <PrivateRoute exact path={["/empleados"]} component={EmpleadosBuscar} />
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
