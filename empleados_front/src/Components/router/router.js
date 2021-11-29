import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login/Login";
import PrivateRoute from "../auth/PrivateRoute";
import ProductosCRUD from "../productosCRUD";
import Inicio from "../../views/inicio/Inicio";
import Productos from "../../views/productos/Productos";
import PerfilUsuario from "../../views/perfil/perfilUsuario";
import ProductosDetails from "../../views/productsdetails/ProductsDetails";
import Carrito from "../../views/carrito/Carrito";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/inicio"]} component={Inicio} />
                <Route exact path={["/productos"]} component={Productos} />
                <Route exact path={["/login"]} component={Login} />
                <Route exact path={["/perfil"]} component={PerfilUsuario} />
                <Route exact path={["/carrito"]} component={Carrito} />
                <Route
                    exact
                    path={["/detalles"]}
                    component={ProductosDetails}
                />
                <PrivateRoute
                    exact
                    path={["/listaproductos"]}
                    component={ProductosCRUD}
                />
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
