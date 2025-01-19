import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../redux/userSlice";

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    // Redirect to home if user is already logged in
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
