import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../login/Login";
import PrivateRoute from "../auth/privateroute";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component={Login} />
                <PrivateRoute exact path="/home" component={Home}/>
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

export function Home() {
    return <h2>HOME</h2>;
}