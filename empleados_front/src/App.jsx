import { Container } from "react-bootstrap";
import "./App.css";
import Menu from "./Components/page/Navbar";
import AppRouter from "./Components/router/router";

function App() {
    return (
        <div className="App">
            <Container>
                <Menu />
                <AppRouter />
            </Container>
        </div>
    );
}

export default App;
