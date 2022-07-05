import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ItemPage from "./Pages/ItemPage";
import Sell from "./Pages/SellPage";
import CategoryPage from "./Pages/Category";
import Edit from "./Pages/EditPage";
import Profile from "./Pages/Profile";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./hoc/ProtectedRoute";
import MyAds from "./Pages/MyAds";
function App() {
    return (
        <AuthProvider>
            <div>
                {
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route
                                exact
                                path="/itemPage/:id"
                                element={<ItemPage />}
                            />

                            <Route
                                path="/category/:id"
                                element={<CategoryPage />}
                            />

                            <Route exact path="/edit/:id" element={<Edit />} />

                            <Route exact path="/" element={<ProtectedRoute />}>
                                <Route
                                    exact
                                    path="/profile"
                                    element={<Profile />}
                                />
                            </Route>
                            <Route exact path="/" element={<ProtectedRoute />}>
                                <Route
                                    exact
                                    path="/myAds"
                                    element={<MyAds />}
                                />
                            </Route>
                            <Route exact path="/" element={<ProtectedRoute />}>
                                <Route exact path="/sell" element={<Sell />} />
                            </Route>
                        </Routes>
                    </Router>
                }
            </div>
        </AuthProvider>
    );
}

export default App;
