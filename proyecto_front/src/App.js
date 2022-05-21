import "./App.css";
import Menu from "./Components/page/Navbar";
import AppRouter from "./Components/router/router";
import Footer from "./Components/page/Footer";

function App() {
    return (
        <div className="App">
            <Menu />
            <AppRouter />
            <Footer />
        </div>
    );
}

export default App;
