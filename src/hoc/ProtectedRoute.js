import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProtectedRoute = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
