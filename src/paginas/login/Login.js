import "./Login.css";

export const Login = () => {
  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center my-4">
              <h2 className="heading-section">El meu compte</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <form className="signin-form">
                  <span>Email</span>
                  <div className="form-group">
                    <input type="text" className="form-control" required />
                  </div>
                  <span>Contrasenya</span>
                  <div className="opcions-login form-group">
                    <input
                      id="password-field"
                      type="password"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="opcions-login form-group ">
                    <div>
                      <label className="checkbox-wrap">
                        <input className="mr-1" type="checkbox" checked />
                        Recorda'm
                      </label>
                    </div>
                    <div>
                      <span>Heu oblidat la contrasenya?</span>
                    </div>
                  </div>
                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="button btn-login btn form-control mt-2 px-3"
                    >
                      Inicia sessió
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
