import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login/Login";
import PrivateRoute from "../auth/PrivateRoute";
import ProductosCRUD from "../productosCRUD";
import Productos from "../../views/productos/Productos";
import ProductosDetails from "../../views/ProductosDetails/ProductsDetailsFront";
import Casa from "../../views/Casa/CasaFront";
import RegistroUsuario from "../../views/RegistroUsuario/RegistroUsuarioFront";
import Carrito from "../../views/Carrito/CarritoFront";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/Carrito"]} component={Carrito} />
                <Route exact path={["/Productos"]} component={Productos} />
                <Route exact path={["/Detalles"]} component={ProductosDetails}/>
                <Route exact path={["/Home"]} component={Casa}/>
                <Route exact path={["/Login"]} component={Login} />
                <Route exact path={["/Registro"]} component={RegistroUsuario} />
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
