// src/components/RequireAuth.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsAuthenticated } from "../redux/slices/authSlice";

const RequireAuth = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

  if (isAuthenticated) {
    return children;
  }

  // Перенаправляем на /login, сохраняя исходный путь в state
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
