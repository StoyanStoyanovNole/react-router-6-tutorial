import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  /* Check if user exists */
  if (!user) {
    return <Navigate to="/about" />;
  }
  return children;
};

export default ProtectedRoute;
