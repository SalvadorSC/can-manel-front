import "./Searcher.css";
import { Fade as Hamburger } from "hamburger-react";
import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";

export const Searcher = () => {
  const [openSearcher, setOpenSearcher] = useState(false);
  const nodeRef = useRef(null);

  return (
    <>
      <aside className="searcher">
        <button className="hamburguer-button btn" type="button">
          <Hamburger
            toggled={openSearcher}
            toggle={setOpenSearcher}
            direction="right"
            color="#fff"
            size={20}
          />
        </button>
        <CSSTransition
          in={openSearcher}
          nodeRef={nodeRef}
          timeout={300}
          classNames="searcher-form"
        >
          <form
            ref={nodeRef}
            className={`${
              openSearcher ? "open-form " : "close-form "
            }row align-items-center justify-content-between`}
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
              <div className="d-sm-flex justify-content-between">
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
        </CSSTransition>
      </aside>
    </>
  );
};
