import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

export const Login = (props) => {
  const { fetchGlobal, urlAPI } = props;
  const history = useHistory();
  const { LogIn } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    user: "",
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
    const resp = await fetchGlobal(urlAPI + "users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (!resp.ok) {
      setError(true);
      return;
    }
    setError(false);
    const { token } = await resp.json();
    localStorage.setItem("token", token);
    LogIn();
    history.push("/principal");
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-12 mb-4">
          <h2 className="heading-section">Inicia Sessió</h2>
          <hr />
        </div>
      </div>
      <div className="login-wrap p-0">
        <form className="signin-form row" onSubmit={sendFormLogIn}>
          <div className="col-md-12 col-lg-6">
            <label htmlFor="user">Email *</label>
            <div className="form-group">
              <input
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
                name="password"
                type="password"
                className="form-control"
                required
                onChange={setData}
              />
            </div>
            {error && <p className="error-login-data">Dades incorrectes</p>}

            <div className="d-flex justify-content-between mb-3">
              <span className="mr-2">Recorda la contrasenya</span>
              <input type="checkbox" name="recordar-contrasenya" className="" />
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
              <Link to="./registre">
                <button
                  type="button"
                  className="button btn-login btn form-control mt-2 px-3"
                >
                  Crear un compte
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
