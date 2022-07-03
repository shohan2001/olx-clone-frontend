import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ItemPage from "./Pages/ItemPage";
import Sell from "./Pages/SellPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/itemPage/:id" element={<ItemPage />} />
                    <Route path="/sell" element={<Sell />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
