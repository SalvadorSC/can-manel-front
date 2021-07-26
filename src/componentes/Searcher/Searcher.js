import "./Searcher.css";
import { FaSearch, FaTimes } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";

export const Searcher = (props) => {
  const { products, setProducts } = props;
  const [openSearcher, setOpenSearcher] = useState(false);
  const nodeRef = useRef(null);
  const urlAPI = process.env.REACT_APP_URL_API;
  const [inputData, setInputData] = useState({
    name: "",
    category: "",
    field: "",
  });
  const [message, setMessage] = useState(false);

  const setList = async (inputData) => {
    const { name, category, field } = inputData;
    const input =
      name !== ""
        ? "name"
        : category !== ""
        ? "category"
        : field !== ""
        ? "field"
        : undefined;
    const data = name || category || field;
    if (data !== "" && input !== undefined) {
      const resp = await fetch(`${urlAPI}products/list-by-${input}/${data}`);
      if (resp.ok) {
        setMessage(false);
        const productsList = await resp.json();
        setProducts(productsList);
        return true;
      }
      setMessage(true);
      setProducts([]);
      return false;
    }
    const resp = await fetch(`${urlAPI}products/list`);
    if (resp.ok) {
      setMessage(false);
      const productsList = await resp.json();
      setProducts(productsList);
    }
    return false;
  };

  return (
    <>
      <aside className="searcher">
        <button
          className="hamburguer-button btn"
          type="button"
          onClick={() => setOpenSearcher(!openSearcher)}
        >
          {!openSearcher && <FaSearch color="#fff" size={20} />}
          {openSearcher && <FaTimes color="#fff" size={20} />}
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
            onSubmit={(e) => {
              e.preventDefault();
              setMessage(false);
              setList(inputData);
            }}
          >
            <div className="form-group col-sm-4">
              <label htmlFor="name">Buscar per nom:</label>
              <input
                type="text"
                className="searcher-input form-control"
                id="name"
                placeholder="Introdueix un nom..."
                value={inputData.name}
                onChange={(e) =>
                  setInputData({ ...inputData, name: e.target.value })
                }
              />
            </div>
            <div className="form-group d-flex flex-column col-sm-4">
              <label htmlFor="category">Buscar per categoria:</label>
              <select
                className="searcher-input form-control"
                id="category"
                value={inputData.category}
                onChange={(e) => {
                  setInputData({ ...inputData, category: e.target.value });
                }}
              >
                <option value="" defaultValue></option>
                <option value="fruits">Fruites</option>
                <option value="vegetables">Verdures</option>
                <option value="hortalisses">Hortalisses</option>
              </select>
            </div>
            <div className="form-group d-flex flex-column col-sm-4">
              <label htmlFor="order">Ordena per:</label>
              <div className="d-sm-flex justify-content-between">
                <select
                  className="searcher-input form-control"
                  id="order"
                  value={inputData.field}
                  onChange={(e) =>
                    setInputData({ ...inputData, field: e.target.value })
                  }
                >
                  <option value="" defaultValue></option>
                  <option value="priceUnit">Preu</option>
                  <option value="discount">Descomptes</option>
                  <option value="name">Ordre alfabètic</option>
                </select>
                <button type="submit" className="button searcher-button">
                  Filtrar
                </button>
              </div>
            </div>
          </form>
        </CSSTransition>
      </aside>
      {message && (
        <span className="not-found">No s'ha trobat cap producte</span>
      )}
    </>
  );
};
