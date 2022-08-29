import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";

export default function AuthMiddleware() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
