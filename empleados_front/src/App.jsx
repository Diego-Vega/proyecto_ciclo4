import React from "react";
import "./App.css";
import Login from "./Components/login/Login";
import Menu from "./Components/page/Navbar";

function App() {
    return (
        <div className="App">
            <Menu />
            <Login/>
        </div>
    );
}

export default App;
