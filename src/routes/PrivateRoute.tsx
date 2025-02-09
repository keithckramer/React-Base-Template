import React, { JSX } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem("token"); // Check for token existence

    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
