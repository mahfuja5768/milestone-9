import { useContext } from "react";
import { AuthContext } from "../../ProviderContext/providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="text-center mx-auto my-5"><span className="loading loading-spinner text-success "></span></div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login2"></Navigate>;
};

export default PrivateRoute;
