import { Navigate } from "react-router-dom";
import { isLogin } from "./auth";
import { useState } from "react";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  let auth;
  const checkAuth = async () => {
    auth = await isLogin();
    setLoading(false);
  };
  checkAuth();
  if (loading == true) {
    return <h1>Loading</h1>;
  }
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
