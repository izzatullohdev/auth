import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { AuthProvider } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const {token} = AuthProvider();

  if (token) {
    return children; // Token mavjud bo'lsa, marshrutni och
  } else {
    return <Navigate to="/login" />; // Token yo'q bo'lsa, login sahifasiga yo'naltir
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
