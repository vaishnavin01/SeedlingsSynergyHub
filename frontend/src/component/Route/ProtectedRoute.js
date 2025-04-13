import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);

    if (loading) {
        return <div>Loading...</div>; // Optionally, you can add a loading indicator
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (isAdmin && user && user.role !== "admin") {
        return <Navigate to="/login" />;
    }

    return <Route {...rest} component={Component} />;
};

export default ProtectedRoute;
