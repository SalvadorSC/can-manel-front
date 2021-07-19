import "./HistorialCard.css";
import { FaImages, FaTimes } from "react-icons/fa";

export const HistorialCard = (props) => {
  const { setShowImage, showImage } = props;
  return (
    <>
      <div className="card-historial col-md-12 mb-4 p-4">
        <h2 className="heading-section">10-7-2021</h2>
        <hr />
        <div className="d-flex justify-content-between">
          <span>Tomaquet fresc de Can Mateu</span>
          <FaImages
            onClick={() => setShowImage(!showImage)}
            className="icona-imatges"
          />
          <span>Fruita</span>
          <span>15.45€</span>
          <span>2.5kg</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <span>Tomaquet fresc de Can Mateu</span>
          <FaImages
            onClick={() => setShowImage(!showImage)}
            className="icona-imatges"
          />
          <span>Fruita</span>
          <span>15.45€</span>
          <span>2.5kg</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <span>Tomaquet fresc de Can Mateu</span>
          <FaImages
            onClick={() => setShowImage(!showImage)}
            className="icona-imatges"
          />
          <span>Fruita</span>
          <span>15.45€</span>
          <span>2.5kg</span>
        </div>
        <hr />

        <div className="d-flex justify-content-between mt-5">
          <h3 className="heading-section">Total</h3>
          <div>
            <button className="button btn-login btn form-control mr-5">
              Repetir compra
            </button>
            <span className="mx-5">12.5kg</span>
            <span className="ml-5">45.45€</span>
          </div>
        </div>
      </div>
    </>
  );
};
