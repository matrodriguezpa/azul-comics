import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <HomePage></HomePage>
            <Footer/>
        </div>
    );
}

export default App;
