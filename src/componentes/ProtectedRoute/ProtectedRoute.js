import { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

export const ProtectedRoute = (props) => {
  const { children } = props;
  const [adminRole, setAdminRole] = useState(null);
  const { logIn } = useContext(AuthContext);
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal } = useFetch(urlAPI);
  const loadAdmins = useCallback(async () => {
    const admin = await fetchGlobal(`${urlAPI}users/list-admins`);
    setAdminRole(admin);
    console.log(admin);
  }, [fetchGlobal, urlAPI]);

  useEffect(() => {
    loadAdmins();
  }, [loadAdmins]);

  const history = useHistory();
  useEffect(() => {
    if (!logIn || adminRole === false) {
      history.push("/principal");
      return;
    }
  }, [adminRole, history, logIn]);
  return children;
};
