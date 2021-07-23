import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = (props) => {
  const { children } = props;

  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("admin");
  const [loggedIn, setLoggedIn] = useState(!!token);
  const [adminRole, setAdminRole] = useState(isAdmin);

  const logIn = () => {
    setLoggedIn(true);
  };
  const logOut = useCallback(() => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        token,
        logIn,
        logOut,
        adminRole,
        setAdminRole,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
