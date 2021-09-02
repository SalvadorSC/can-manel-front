import { useCallback, useContext, useEffect, useState } from "react";
import { AdminTotalUsersList } from "../../componentes/AdminTotalUsersList/AdminTotalUsersList";
import { AuthContext } from "../../context/AuthContext";
import "./AdminUsersList.css";

export const AdminUsersList = (props) => {
  const { fetchGlobal } = props;
  const [user, setUser] = useState([]);
  const { token } = useContext(AuthContext);

  const urlAPI = process.env.REACT_APP_URL_API;

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

  return (
    <section className="admin">
      <h2>Llista d'usuaris</h2>
      <hr />
      <div className="searcher-users d-flex">
        <div className="form-group">
          <input
            type="text"
            className="searcher-input-users form-control"
            id="name"
            placeholder="Introdueix un nom..."
            /*   value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            } */
          />
        </div>
        <button type="submit" className="button searcher-button">
          Buscar
        </button>
      </div>
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
  );
};
