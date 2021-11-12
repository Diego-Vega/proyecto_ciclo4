import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../login/Login";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component={Login} />
                <Route
                    path={"*"}
                    component={() => (
                        <h2 style={{ marginTop: 200 }}>
                            404
                            <br />
                            PÁGINA NO ENCONTRADA
                        </h2>
                    )}
                />
            </Switch>
        </Router>
    );
}
