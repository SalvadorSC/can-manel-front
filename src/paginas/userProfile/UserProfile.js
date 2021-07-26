import { useCallback, useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import "./UserProfile.css";

export const UserProfile = () => {
  const [confirmarContrasenya, setConfirmarContrasenya] = useState(false);
  const [mostrarInfoEditar, setMostrarInfoEditar] = useState(true);
  const [user, setUser] = useState([]);
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
      setUser(userInfo);
    }
  }, [fetchGlobal, token, urlAPI]);

  useEffect(() => {
    loadUserInfo();
  }, [loadUserInfo]);

  const confirmacionContrasenya = (
    <>
      <div className="password-confirmation">
        <form className="p-5">
          <label htmlFor="confirmarContrasenya">
            Si us plau introduiu la contrasenya per poder fer canvis:
          </label>
          <input
            type="password"
            name="confirmarContrasenya"
            id="password-confirmation"
            className="form-control"
          />
          <button
            type="button"
            className="button btn-password btn form-control mt-2 px-3"
            onClick={() => {
              setConfirmarContrasenya(!confirmarContrasenya);
              setMostrarInfoEditar(!mostrarInfoEditar);
            }}
          >
            Confirmar contrasenya
          </button>
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
          <p>Adreça electrónica:</p>
          <p>{user.email}</p>
        </div>
        <div className=" d-flex justify-content-between">
          <p>Telefon:</p>
          <p>{user.phone}</p>
        </div>
        <button
          type="button"
          className="button btn-login btn form-control mt-3 px-3"
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
        <Link to="/registro">
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
              placeholder="Salvador"
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
              placeholder="Sanchez Campos"
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
              placeholder="sadasdas@gmail.com"
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
              placeholder="sadasdas@gmail.com"
              required
            />
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <label htmlFor="contrasenya">Contrasenya</label>
          <div className="login-options form-group">
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
          <div className="login-options form-group">
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
            <input
              name="telefon"
              type="tel"
              className="form-control"
              placeholder="662 21 62 97"
            />
          </div>
        </div>
      </form>
      <button
        type="button"
        className="button btn-login btn form-control mt-3 px-3"
        onClick={() => {
          setMostrarInfoEditar(!mostrarInfoEditar);
        }}
      >
        Guardar dades usuari
      </button>
    </>
  );
  return (
    <>
      {confirmarContrasenya && confirmacionContrasenya}
      {mostrarInfoEditar ? informacionUsuario : editarInformacionUsuario}
    </>
  );
};
