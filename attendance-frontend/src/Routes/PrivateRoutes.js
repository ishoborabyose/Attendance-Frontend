import React from "react";
import { Navigate } from "react-router";
import { isAuth } from "../helpers/Auth";

export default function PrivateRoute({ children }) {
  return isAuth() ? children : <Navigate to="/login" />;
}
