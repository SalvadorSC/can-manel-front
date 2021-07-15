import { Link, NavLink } from "react-router-dom";
import "./Register.css";

export const Register = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center my-8">
              <h2 className="heading-section">Crea un compte</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              <div className="login-wrap p-0">
                <form className="signin-form">
                  <label htmlFor="nom-complet">Nom complet</label>
                  <div className="form-group">
                    <input
                      name="nom-complet"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <label htmlFor="usuari">Nom d'usuari</label>
                  <div className="form-group">
                    <input
                      name="usuari"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <label htmlFor="email">Email</label>
                  <div className="form-group">
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <label htmlFor="email-confirmar">Confirmació d'email</label>
                  <div className="form-group">
                    <input
                      name="email-confirmar"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <label htmlFor="contrasenya">Contrasenya</label>
                  <div className="opcions-login form-group">
                    <input
                      name="contrasenya"
                      type="password"
                      className="form-control"
                      required
                    />
                  </div>
                  <label htmlFor="contrasenya-confirmar">
                    Confirmació de contrasenya
                  </label>
                  <div className="opcions-login form-group">
                    <input
                      name="contrasenya-confirmar"
                      type="password"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Ja tens un usuari?</span>
                    <Link to="./iniciar-sesion">Inicia sessió</Link>
                  </div>
                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="button btn-login btn form-control mt-2 px-3"
                    >
                      Crear un compte
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
