import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home></Home>
        </div>
    );
}

export default App;
