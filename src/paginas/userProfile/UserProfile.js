import { useCallback, useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import "./UserProfile.css";

export const UserProfile = () => {
  const [confirmarContrasenya, setConfirmarContrasenya] = useState(false);
  const [mostrarInfoEditar, setMostrarInfoEditar] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    surnames: "",
    phone: "",
    email: "",
    address: "",
    isAdmin: "",
    _id: "",
  });
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongConfirmations, setWrongConfirmations] = useState({
    email: false,
    password: false,
  });
  const [confirmations, setConfirmations] = useState({
    email: "",
    password: "",
  });
  const { token } = useContext(AuthContext);
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal } = useFetch(urlAPI);

  const loadUserInfo = useCallback(async () => {
    const userInfo = await fetchGlobal(`${urlAPI}users/my-user`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (userInfo) {
      userInfo.password = "";
      setUser(userInfo);
    }
  }, [fetchGlobal, token, urlAPI]);

  useEffect(() => {
    loadUserInfo();
  }, [loadUserInfo]);

  const checkPassword = async (password) => {
    const resp = await fetch(`${urlAPI}users/password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: user.username, password }),
    });
    return resp.ok ? true : false;
  };

  const modifyUser = async (userToModify) => {
    delete userToModify._id;
    delete userToModify.isAdmin;
    const resp = await fetch(`${urlAPI}users/user`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToModify),
    });
    return resp.ok ? true : false;
  };

  const confirmacionContrasenya = (
    <>
      <div className="password-confirmation">
        <form className="p-5">
          <label htmlFor="confirmarContrasenya">
            Si us plau introduiu la contrassenya per poder fer canvis:
          </label>
          <input
            type="password"
            name="confirmarContrasenya"
            id="password-confirmation"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="button btn-password btn form-control mt-2 px-3"
            onClick={async (e) => {
              setWrongPassword(false);
              e.preventDefault();
              if (!(await checkPassword(confirmPassword))) {
                setMostrarInfoEditar(true);
                setWrongPassword(true);
              } else {
                setMostrarInfoEditar(false);
                setConfirmarContrasenya(!confirmarContrasenya);
              }
            }}
          >
            Confirmar contrasenya
          </button>
          {wrongPassword && (
            <span className="wrong-password">Contrassenya incorrecta</span>
          )}
        </form>
      </div>
    </>
  );
  const informacionUsuario = (
    <div className="row justify-content-center">
      <div className="col-md-12 mb-4">
        <div className="">
          <h2 className="heading-section d-flex justify-content-between align-items-center">
            Perfil d'usuari
            <FaUser />
          </h2>
        </div>

        <hr />
      </div>
      <div className="col-md-8 col-sm-12 mb-5">
        <div className=" d-flex justify-content-between">
          <p>Nom:</p>
          <p>{user.name}</p>
        </div>
        <div className=" d-flex justify-content-between">
          <p>Cognoms:</p>
          <p>{user.surnames}</p>
        </div>
        <div className=" d-flex justify-content-between">
          <p>Adreça electrònica:</p>
          <p>{user.email}</p>
        </div>
        <div className=" d-flex justify-content-between">
          <p>Telèon:</p>
          <p>{user.phone}</p>
        </div>
        <button
          type="button"
          className="button btn-data-purchase btn-login btn form-control mt-3 px-3"
          onClick={() => {
            setConfirmarContrasenya(!confirmarContrasenya);
          }}
        >
          Editar les dades d'usuari
        </button>
      </div>
      <div className="nav-column-compres col-md-4 col-sm-12 d-flex flex-column text-right">
        <Link to="/historial-compra" className="mb-4">
          Historial de compra
        </Link>
        <Link to="/principal" className="mb-4">
          Dades de compra
        </Link>
        <Link to="/principal" className="mb-4">
          Dades de compra
        </Link>
        <Link to="/compra">
          <button
            type="button"
            className="button btn-data-purchase btn form-control mt-2 px-3"
          >
            Editar les dades de compra
          </button>
        </Link>
      </div>
    </div>
  );
  const editarInformacionUsuario = (
    <>
      <div className="row justify-content-center">
        <div className="col-md-12 mb-4">
          <h2 className="heading-section">Edita la teva informació</h2>
          <hr />
        </div>
      </div>
      <form className="signin-form row">
        <div className="col-md-12 col-lg-6">
          <label htmlFor="nom">Nom</label>
          <div className="form-group">
            <input
              name="nom"
              type="text"
              className="form-control"
              placeholder={user.name}
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <label htmlFor="cognom">Cognoms</label>
          <div className="form-group">
            <input
              name="cognom"
              type="text"
              className="form-control"
              placeholder={user.surnames}
              value={user.surnames}
              onChange={(e) => setUser({ ...user, surnames: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="col-md-12 col-lg-6">
          <label htmlFor="email">Email</label>
          <div className="form-group">
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder={user.email}
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <label htmlFor="email-confirmar">Confirmació d'email *</label>
          {wrongConfirmations.email && (
            <span className="wrong-password mx-4">
              Els emails no coincideixen
            </span>
          )}
          <div className="form-group">
            <input
              name="email-confirmar"
              type="text"
              className="form-control"
              value={confirmations.email}
              onChange={(e) =>
                setConfirmations({ ...confirmations, email: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <label htmlFor="contrasenya">Contrassenya</label>
          <div className="login-options form-group">
            <input
              name="contrasenya"
              type="password"
              className="form-control"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <label htmlFor="contrasenya-confirmar">
            Confirmació de contrassenya *
          </label>
          {wrongConfirmations.password && (
            <span className="wrong-password mx-4">
              Les contrassenyes no coincideixen
            </span>
          )}
          <div className="login-options form-group">
            <input
              name="contrasenya-confirmar"
              type="password"
              className="form-control"
              value={confirmations.password}
              onChange={(e) =>
                setConfirmations({ ...confirmations, password: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <label htmlFor="telefon">Telèfon</label>
          <div className="form-group">
            <input
              name="telefon"
              type="tel"
              className="form-control"
              placeholder={user.phone}
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </div>
        </div>
        <button
          type="submit"
          className="button btn-login btn form-control mt-3 px-3"
          onClick={async (e) => {
            e.preventDefault();
            setWrongConfirmations({ email: false, password: false });
            if (
              user.password !== confirmations.password ||
              user.email !== confirmations.email
            ) {
              if (user.email !== confirmations.email) {
                setWrongConfirmations({ ...wrongConfirmations, email: true });
              }
              if (user.password !== confirmations.password) {
                setWrongConfirmations({
                  ...wrongConfirmations,
                  password: true,
                });
              }
            } else {
              await modifyUser(user);
              setMostrarInfoEditar(!mostrarInfoEditar);
              setWrongConfirmations({ email: false, password: false });
            }
          }}
        >
          Guardar dades usuari
        </button>
      </form>
    </>
  );
  return (
    <>
      {confirmarContrasenya && confirmacionContrasenya}
      {mostrarInfoEditar ? informacionUsuario : editarInformacionUsuario}
    </>
  );
};
