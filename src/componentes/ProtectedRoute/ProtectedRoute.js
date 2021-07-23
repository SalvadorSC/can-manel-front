import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const ProtectedRoute = (props) => {
  const { children } = props;
  const { adminRole, token } = useContext(AuthContext);

  const history = useHistory();
  useEffect(() => {
    if (!token && !adminRole) {
      history.push("/principal");
      return;
    }
  }, [adminRole, history, token]);
  return children;
};
