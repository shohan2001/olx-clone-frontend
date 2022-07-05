import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ItemPage from "./Pages/ItemPage";
import Sell from "./Pages/SellPage";
import CategoryPage from "./Pages/Category";
import Edit from "./Pages/EditPage";
import UserPage from "./Pages/UserPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itemPage/:id" element={<ItemPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/userPage" element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
