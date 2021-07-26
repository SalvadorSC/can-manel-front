import { useCallback, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

export const Login = (props) => {
  const { fetchGlobal, setShoppingCart, userShoppingCart } = props;
  const history = useHistory();
  const { logIn, setAdminRole } = useContext(AuthContext);

  const urlAPI = process.env.REACT_APP_URL_API;

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const setData = (e) => {
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value,
    });
  };

  const sendFormLogIn = async (e) => {
    e.preventDefault();
    const resp = await fetch(urlAPI + "users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (resp.ok) {
      localStorage.removeItem("token");
      localStorage.removeItem("admin");
      localStorage.removeItem("shoppingCartId");
      setError(false);
      const userInfo = await resp.json();
      console.log(userInfo);
      localStorage.setItem("token", userInfo.token);
      userShoppingCart();
      const isAdmin = await roleAssigment(userInfo);
      localStorage.setItem("admin", isAdmin);
      setAdminRole(isAdmin);
      logIn();
      if (isAdmin) {
        history.push("/administracio");
        return;
      } else {
        history.push("/principal");
        return;
      }
    } else {
      setError(true);
    }
  };

  const roleAssigment = useCallback(
    async (userInfo) => {
      const user = await fetchGlobal(`${urlAPI}users/my-user`, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      });
      return user.isAdmin;
    },
    [fetchGlobal, urlAPI]
  );

  return (
    <>
      <section>
        <div className="row justify-content-center">
          <div className="col-md-12 mb-4">
            <h2 className="heading-section">Inicia Sessió</h2>
            <hr />
          </div>
        </div>
        <div className="login-wrap p-0">
          <form className="signin-form row" onSubmit={sendFormLogIn}>
            <div className="col-md-12 col-lg-6">
              <label htmlFor="username">Nom d'usuari *</label>
              <div className="form-group">
                <input
                  id="username"
                  name="user"
                  type="text"
                  className="form-control"
                  required
                  onChange={setData}
                />
              </div>
              <label htmlFor="password">Contrasenya *</label>
              <div className="login-options form-group">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="form-control"
                  required
                  onChange={setData}
                />
              </div>
              {error && (
                <p className="error-login-data">Les dades no coincideixen!</p>
              )}

              <div className="d-flex align-items-center mb-3">
                <input
                  type="checkbox"
                  name="recordar-contrasenya"
                  className="mr-2"
                />
                <span className="mr-2">Recorda la contrasenya</span>
              </div>
              <div className="form-group text-center">
                <button
                  type="submit"
                  className="button btn-login btn form-control mt-2 px-3"
                >
                  Log in
                </button>
              </div>
            </div>
          </form>

          <div className="col-md-12 col-lg-6">
            <div className="mb-5">
              <p className="mr-2 text-big ">Encara no tens un usuari propi?</p>
              <p className="mr-2 text-center">
                Crea rápidament un compte a Can Mateu i podrás gaudir d'una
                experiencia molt més personalitzada, amb descomptes exclusius,
                historials de compra i molt més!
              </p>
            </div>
            <div className="form-group text-center">
              <Link to="/registre">
                <button
                  type="button"
                  className="button btn-login btn form-control mt-2 px-3"
                >
                  Crear un compte
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
