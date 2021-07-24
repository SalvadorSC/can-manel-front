import { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import "./Register.css";

export const Register = (props) => {
  const { fetchGlobal, urlAPI } = props;
  const history = useHistory();
  const [error, setError] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
    surnames: "",
    email: "",
    phone: "",
  });

  const setData = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.id]: e.target.value,
    });
  };

  const sendUserRegister = async (e) => {
    e.preventDefault();
    const resp = await fetchGlobal(urlAPI + "users/new-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    });
    if (!resp.error) {
      setError(true);
      return;
    }
    history.push("/iniciar-sessio");
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-12 mb-4">
          <h2 className="heading-section">Crea un compte</h2>
          <hr />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div>
          <div className="login-wrap p-0">
            <form className="signin-form row" onSubmit={sendUserRegister}>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="username">Nom *</label>
                <div className="form-group">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="form-control"
                    required
                    onChange={setData}
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="surnames">Cognoms *</label>
                <div className="form-group">
                  <input
                    id="surnames"
                    name="surnames"
                    type="text"
                    className="form-control"
                    required
                    onChange={setData}
                  />
                </div>
              </div>

              <div className="col-md-12 col-lg-6">
                <label htmlFor="email">Email *</label>
                <div className="form-group">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="form-control"
                    required
                    onChange={setData}
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="confirmEmail">Confirmació d'email *</label>
                <div className="form-group">
                  <input
                    id="confirmEmail"
                    name="confirmEmail"
                    type="text"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="password">Contrasenya *</label>
                <div className="login-options form-group">
                  <input
                    id="password"
                    name="contrasenya"
                    type="password"
                    className="form-control"
                    required
                    onChange={setData}
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="confirmPassword">
                  Confirmació de contrasenya *
                </label>
                <div className="login-options form-group">
                  <input
                    id="confirmPassword"
                    name="contrasenya-confirmar"
                    type="password"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="phone">Teléfon</label>
                <div className="form-group">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control"
                    onChange={setData}
                  />
                </div>
              </div>
              {error && (
                <p className="general-error-register">
                  Alguna cosa no ha anat bé!
                </p>
              )}
              <div className="col-md-12 col-lg-6">
                <div className="d-flex justify-content-end mb-3">
                  <span className="mr-2">Ja tens un usuari?</span>
                  <Link className="log-in-register-text" to="/iniciar-sessio">
                    Inicia sessió
                  </Link>
                </div>
                <div className="form-group text-center">
                  <button
                    type="submit"
                    className="button btn-login btn form-control mt-2 px-3"
                  >
                    Registrar-se
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
