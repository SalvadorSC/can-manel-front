import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = (props) => {
  const { children, setShoppingCart } = props;

  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("admin");
  const [loggedIn, setLoggedIn] = useState(!!token);
  const [adminRole, setAdminRole] = useState(isAdmin);
  const [totalPrice, setTotalPrice] = useState(0);

  const logIn = () => {
    setLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        token,
        logIn,
        setLoggedIn,
        adminRole,
        setAdminRole,
        isAdmin,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
