import { Link, NavLink } from "react-router-dom";
import "./Register.css";

export const Register = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-12 mb-4">
            <h2 className="heading-section">Crea un compte</h2>
            <hr />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div>
            <div className="login-wrap p-0">
              <form className="signin-form row">
                <div className="col-md-12 col-lg-6">
                  <label htmlFor="nom">Nom *</label>
                  <div className="form-group">
                    <input
                      name="nom"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <label htmlFor="cognom">Cognoms *</label>
                  <div className="form-group">
                    <input
                      name="cognom"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12 col-lg-6">
                  <label htmlFor="email">Email *</label>
                  <div className="form-group">
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <label htmlFor="email-confirmar">Confirmació d'email *</label>
                  <div className="form-group">
                    <input
                      name="email-confirmar"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <label htmlFor="contrasenya">Contrasenya *</label>
                  <div className="opcions-login form-group">
                    <input
                      name="contrasenya"
                      type="password"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <label htmlFor="contrasenya-confirmar">
                    Confirmació de contrasenya *
                  </label>
                  <div className="opcions-login form-group">
                    <input
                      name="contrasenya-confirmar"
                      type="password"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <label htmlFor="telefon">Teléfon</label>
                  <div className="form-group">
                    <input name="telefon" type="tel" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="d-flex justify-content-end mb-3">
                    <span className="mr-2">Ja tens un usuari?</span>
                    <Link to="./iniciar-sesion">Inicia sessió</Link>
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
      </div>
    </>
  );
};
