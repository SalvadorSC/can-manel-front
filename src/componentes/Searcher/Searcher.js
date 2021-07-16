import "./Searcher.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export const Searcher = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <aside className="searcher">
        {!open && (
          <button
            onClick={setOpen(!open)}
            className="btn"
            type="button"
            data-toggle="collapse"
            data-target="#searcher-form"
            aria-expanded="false"
            aria-controls="searcher-form"
          >
            {open && <FaBars />}
            {!open && <FaTimes />}
          </button>
        )}
        <form
          className="row align-items-center justify-content-between collapse"
          id="searcher-form"
        >
          <div className="form-group col-sm-4">
            <label htmlFor="name">Buscar per nom:</label>
            <input
              type="text"
              className="searcher-input form-control"
              id="name"
              placeholder="Introdueix un nom..."
            />
          </div>
          <div className="form-group d-flex flex-column col-sm-4">
            <label htmlFor="category">Buscar per categoria:</label>
            <select className="searcher-input form-control" id="category">
              <option value="all" defaultValue>
                Totes les categories
              </option>
              <option value="fruits">Fruites</option>
              <option value="vegetables">Verdures</option>
              <option value="hortalisses">Hortalisses</option>
            </select>
          </div>
          <div className="form-group d-flex flex-column col-sm-4">
            <label htmlFor="order">Ordena per:</label>
            <div className="d-flex justify-content-between">
              <select className="searcher-input form-control" id="order">
                <option value="" defaultValue></option>
                <option value="fruits">Preu</option>
                <option value="vegetables">Descomptes</option>
                <option value="hortalisses">Ordre alfabètic</option>
              </select>
              <button type="submit" className="button searcher-button">
                Filtrar
              </button>
            </div>
          </div>
        </form>
      </aside>
    </>
  );
};
