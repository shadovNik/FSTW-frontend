import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PublicRoute ({ children }) {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isAuth) {
    return <Navigate to="/logged" replace />
  }

  return children;
}
