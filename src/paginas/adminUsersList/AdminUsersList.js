import { useCallback, useContext, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AdminTotalUsersList } from "../../componentes/AdminTotalUsersList/AdminTotalUsersList";
import { Loading } from "../../componentes/Loading/Loading";
import { AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import "./AdminUsersList.css";

export const AdminUsersList = () => {
  const [user, setUser] = useState([]);
  const { token } = useContext(AuthContext);
  const [message, setMessage] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
  });
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal, loading } = useFetch(urlAPI);

  const loadProducts = useCallback(async () => {
    const usersAPI = await fetchGlobal(`${urlAPI}users/list`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (usersAPI) {
      setUser(usersAPI);
    }
  }, [fetchGlobal, token, urlAPI]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  /* const setList = async (inputData) => {
    const { name } = inputData;
    const input = name !== "" ? "name" : undefined;
    const data = name;
    if (data !== "" && input !== undefined) {
      const resp = await fetch(`${urlAPI}users/user/list-by-${input}`);
      if (resp.ok) {
        setMessage(false);
        const usersList = await resp.json();
        setUser(usersList);
        return true;
      }
      setMessage(true);
      setUser([]);
      return false;
    }
    const resp = await fetch(`${urlAPI}users/list`);
    if (resp.ok) {
      setMessage(false);
      const usersList = await resp.json();
      setUser(usersList);
    }
    return false;
  }; */

  return (
    <>
      <section className="admin">
        <Link
          to="/administracio"
          className="return-link d-flex align-items-center mb-2"
        >
          <FaArrowLeft className="mr-2" />
          Tornar
        </Link>
        <h2>Llista d'usuaris</h2>
        <hr />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setMessage(false);
            // setList(inputData);
          }}
        >
          <div className="searcher-users d-flex justify-content-center">
            <div className="form-group">
              <input
                type="text"
                className="searcher-input-users form-control"
                id="name"
                placeholder="Introdueix un nom..."
                value={inputData.name}
                onChange={(e) =>
                  setInputData({ ...inputData, name: e.target.value })
                }
              />
            </div>
            <button type="submit" className="button searcher-button">
              Buscar
            </button>
          </div>
        </form>
        {message && (
          <div className="text-center">
            <span className="not-found">
              No s'ha trobat cap usuari amb aquest nom!
            </span>
          </div>
        )}
        <div className="table-users row">
          <div className="col-12">
            <div className="table-titles-user row">
              <div className="col-2">
                <p>Nom</p>
              </div>
              <div className="col-2">
                <p>Cognoms</p>
              </div>
              <div className="col-3">
                <p>Email</p>
              </div>
              <div className="col-1">
                <p>Telèfon</p>
              </div>
              <div className="col-1 text-center">
                <p>Data</p>
              </div>
              <div className="col">
                <p>Direcció</p>
              </div>
            </div>
          </div>
          {user.map((users) => (
            <AdminTotalUsersList users={users} key={users._id} />
          ))}
        </div>
      </section>
      {loading && <Loading />}
    </>
  );
};
