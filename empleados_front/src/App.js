import React from "react";
import "./App.css";
import Menu from "./Components/page/Navbar";
import AppRouter from "./Components/router/router";

function App() {
    return (
        <div className="App">
            <Menu />
            <AppRouter />
        </div>
    );
}

export default App;
