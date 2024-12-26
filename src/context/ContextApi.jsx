import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const useContextApi = createContext();

export const UseContextPage = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <useContextApi.Provider value={{ user, setUser }}>
      {children}
    </useContextApi.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContextGet = () => useContext(useContextApi);

UseContextPage.propTypes = {
  children: PropTypes.node,
};
