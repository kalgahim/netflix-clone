import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const user = UserAuth();

  if (!user.user) {
    return <Navigate to="/" />;
  } else {
    console.log(user.user);
    return children;
  }
};

export default ProtectedRoute;
