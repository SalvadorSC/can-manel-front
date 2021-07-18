import { useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";

export const UserProfile = () => {
  const [confirmarContrasenya, setConfirmarContrasenya] = useState(false);
  const confirmacionContrasenya = (
    <>
      <div className="confirmar-contrasenya">
        <form className="p-5">
          <label htmlFor="confirmarContrasenya">
            Si us plau introduiu la contrasenya per poder fer canvis:
          </label>
          <input
            type="password"
            name="confirmarContrasenya"
            id="confirmar-contrasenya"
            className="form-control"
          />
          <button
            type="button"
            className="button btn-login btn form-control mt-2 px-3"
            onClick={() => setConfirmarContrasenya(!confirmarContrasenya)}
          >
            Confirmar contrasenya
          </button>
        </form>
      </div>
    </>
  );
  return (
    <>
      {confirmarContrasenya && confirmacionContrasenya}
      <div className="row justify-content-center">
        <div className="col-md-12 mb-4">
          <h2 className="heading-section">Perfil d'usuari</h2>
          <hr />
        </div>
        <div className="col-6">
          <div className=" d-flex justify-content-between">
            <p>Nom:</p>
            <p>Salvador</p>
          </div>
          <div className=" d-flex justify-content-between">
            <p>Cognoms:</p>
            <p>Sanchez Campos</p>
          </div>
          <div className=" d-flex justify-content-between">
            <p>Adreça electrónica:</p>
            <p>sakjdhbash@gmail.com</p>
          </div>
          <div className=" d-flex justify-content-between">
            <p>Telefon:</p>
            <p>+34 662 21 62 82</p>
          </div>
          <button
            type="button"
            className="button btn-login btn form-control mt-3 px-3"
            onClick={() => setConfirmarContrasenya(!confirmarContrasenya)}
          >
            Editar les dades d'usuari
          </button>
        </div>
        <div className="col-6 d-flex flex-column text-right">
          <Link to="./principal" className="mb-4">
            Historial de compra
          </Link>
          <Link to="./principal" className="mb-4">
            Dades de compra
          </Link>
          <Link to="./principal" className="mb-4">
            Dades de compra
          </Link>
          <Link to="./registro">
            <button
              type="button"
              className="button btn-login btn form-control mt-2 px-3"
            >
              Editar les dades de compra
            </button>
          </Link>
        </div>
        <div className="col-12"></div>
      </div>
    </>
  );
};
