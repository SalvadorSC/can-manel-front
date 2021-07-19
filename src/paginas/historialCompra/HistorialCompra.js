import "./HistorialCompra.css";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { HistorialCard } from "../../componentes/HistorialCard/HistorialCard";

export const HistorialCompra = () => {
  const [showImage, setShowImage] = useState(false);
  const image = (
    <div className="mostrar-imagen">
      <div className="d-flex align-items-start">
        <div className="image">
          <img src="https://picsum.photos/400/400" alt="" />
        </div>
        <FaTimes
          className="cerrar-imagen-icono"
          onClick={() => setShowImage(!showImage)}
        />
      </div>
    </div>
  );
  return (
    <>
      {showImage && image}
      <div className="row justify-content-center">
        <div className="col-md-12 mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="heading-section">Historial de compres</h2>
            <div className="form-group d-flex flex-column col-sm-4">
              <label htmlFor="category">Ordena per:</label>
              <select className="searcher-input form-control" id="category">
                <option value="data-recent" defaultValue>
                  Data (més recent)
                </option>
                <option value="data-antic">Data (més antic)</option>
                <option value="preu-car">Preu (més car)</option>
                <option value="preu-barat">Preu (més barat)</option>
              </select>
            </div>
          </div>
          <hr />
        </div>
        <HistorialCard setShowImage={setShowImage} showImage={showImage} />
        <HistorialCard setShowImage={setShowImage} showImage={showImage} />
        <HistorialCard setShowImage={setShowImage} showImage={showImage} />
      </div>
    </>
  );
};
