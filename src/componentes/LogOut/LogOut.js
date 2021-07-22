import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

export const LogOut = () => {
  const { logOut } = useContext(AuthContext);
  useEffect(() => {
    logOut();
  }, [logOut]);
  return null;
};
