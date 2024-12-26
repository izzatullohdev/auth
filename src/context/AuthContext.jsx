import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { serverApi } from "./api";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("authToken"));

  const login = (tokenValue) => {
    localStorage.setItem("authToken", tokenValue);
    setToken(tokenValue);
  };

  const logout = async () => {
    await serverApi("auth/logout", "POST");
    localStorage.removeItem("authToken");
    window.location.reload("/login");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
