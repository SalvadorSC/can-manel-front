import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Register.css";
import { useFetch } from "../../hooks/useFetch";

export const Register = () => {
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal } = useFetch(urlAPI);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const history = useHistory();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
    surnames: "",
    email: "",
    phone: "",
  });

  const sendUserRegister = async (data) => {
    const {
      username,
      surnames,
      password,
      confirmPassword,
      email,
      confirmEmail,
      phone,
      name,
    } = data;
    if (password === confirmPassword && email === confirmEmail) {
      try {
        const resp = await fetchGlobal(urlAPI + "users/new-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            username,
            surnames,
            password,
            phone,
            email,
          }),
        });
        setError(false);
        history.push("/iniciar-sessio");
        if (!resp.ok) {
          setError(true);
          setErrorMessage("Alguna cosa no ha anat bé, torna-ho a provar!");
          return;
        }
      } catch (err) {
        setError(true);
      }
    } else if (password !== confirmPassword) {
      setError(true);
      setErrorMessage("La contrasenya no coincideix!");
    } else if (email !== confirmEmail) {
      setError(true);
      setErrorMessage("L'email no coincideix!");
    }
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
            <form
              className="signin-form row"
              noValidate
              onSubmit={handleSubmit(sendUserRegister)}
            >
              <div className="col-md-12 col-lg-6">
                <label htmlFor="name">Nom *</label>
                <div className="form-group">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Aquest camp és obligatori",
                      },
                    })}
                  />
                  {errors.username && (
                    <p className="form-errors-register">
                      {errors.username.message}
                    </p>
                  )}
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
                    {...register("surnames", {
                      required: {
                        value: true,
                        message: "Aquest camp és obligatori",
                      },
                    })}
                  />
                  {errors.surnames && (
                    <p className="form-errors-register">
                      {errors.surnames.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="username">Nom d'usuari *</label>
                <div className="form-group">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="form-control"
                    {...register("username", {
                      required: {
                        value: true,
                        message: "Aquest camp és obligatori",
                      },
                    })}
                  />
                  {errors.username && (
                    <p className="form-errors-register">
                      {errors.username.message}
                    </p>
                  )}
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
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Aquest camp és obligatori",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="form-errors-register">
                      {errors.email.message}
                    </p>
                  )}
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
                    {...register("confirmEmail", {
                      required: {
                        value: true,
                        message: "Aquest camp és obligatori",
                      },
                    })}
                  />
                  {errors.confirmEmail && (
                    <p className="form-errors-register">
                      {errors.confirmEmail.message}
                    </p>
                  )}
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
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Aquest camp és obligatori",
                      },
                      minLength: {
                        value: 8,
                        message:
                          "La contrasenya ha de tenir almenys 8 caràcters",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="form-errors-register">
                      {errors.password.message}
                    </p>
                  )}
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
                    {...register("confirmPassword", {
                      required: {
                        value: true,
                        message: "Aquest camp és obligatori",
                      },
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="form-errors-register">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="phone">Teléfon *</label>
                <div className="form-group">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control"
                    {...register("phone", {
                      required: true,
                      minLength: {
                        value: 9,
                        message: "El número de telèfon ha de tenir 9 dígits",
                      },
                      maxLength: {
                        value: 9,
                        message: "El número de telèfon ha de tenir 9 dígits",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="form-errors-register">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col">
                {error && (
                  <p className="general-error-register">{errorMessage}</p>
                )}
              </div>
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
