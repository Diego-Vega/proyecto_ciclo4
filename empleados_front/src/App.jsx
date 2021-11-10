import React from "react";
import "./App.css";
import Login from "./Components/login/Login";
import Nav from "./Components/page/Nav";

function App() {
    return (
        <div className="App">
            <Nav />
            <Login/>
        </div>
    );
}

export default App;
