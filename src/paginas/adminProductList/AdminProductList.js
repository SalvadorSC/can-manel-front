import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { AdminProduct } from "../../componentes/adminProduct/AdminProduct";
import "./AdminProductList.css";

export const AdminProductList = (props) => {
  const { products } = props;
  const [formOpen, setFormOpen] = useState(false);
  const [action, setAction] = useState(null);

  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <section className="admin">
      <div className="create-item d-flex justify-content-center align-items-center">
        <p>Afegir un nou producte</p>
        <button
          className="button ml-2"
          type="button"
          onClick={() => {
            setAction("create");
            toggleForm();
          }}
        >
          Crear
        </button>
      </div>
      <div className="row justify-content-between mb-3">
        <div className="form-group col-5 d-flex align-items-center h-40">
          <label className="col-form-label mr-1" htmlFor="name">
            Buscar per nom:
          </label>
          <input
            type="text"
            className="admin-searcher-input form-control"
            id="name"
            placeholder="Introdueix un nom..."
          />
        </div>
        <div className="form-group col-5 d-flex">
          <label className="col-form-label mr-1" htmlFor="category">
            Buscar per categoria:
          </label>
          <select className="admin-searcher-input form-control" id="category">
            <option value="all" defaultValue>
              Totes les categories
            </option>
            <option value="fruits">Fruites</option>
            <option value="vegetables">Verdures</option>
            <option value="hortalisses">Hortalisses</option>
          </select>
        </div>
        <button type="submit" className="button searcher-button col-2">
          Filtrar
        </button>
      </div>

      {formOpen && (
        <div className="container-edit">
          <FaTimes className="icon-close-form" onClick={toggleForm} />
          <form>
            <div className="row">
              <div className="content col-3">
                <label htmlFor="file-input">
                  <img
                    className="content-image"
                    src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
                    alt=""
                  />
                  <div className="content-details fadeIn-top">
                    <p>Seleccionar imatge</p>
                  </div>
                  <input id="file-input" type="file" />
                </label>
              </div>
              <div className="col form-group pt-4">
                <label htmlFor="productName">Nom producte:</label>
                <input type="text" className="mb-4 d-block" id="productName" />
                <label className="col-form-label mr-1" htmlFor="categoryEdit">
                  Categoria:
                </label>
                <select className="" id="categoryEdit">
                  <option value="all" defaultValue>
                    Totes les categories
                  </option>
                  <option value="fruits">Fruites</option>
                  <option value="vegetables">Verdures</option>
                  <option value="hortalisses">Hortalisses</option>
                </select>
              </div>
              <div className="col form-group pt-4">
                <label htmlFor="descriptionProduct">Descripció:</label>
                <textarea id="descriptionProduct" rows="3" cols="25"></textarea>
              </div>
            </div>
            <div className="item-price row text-center mt-3">
              <div className="col-3 form-group">
                <label htmlFor="itemPrice">Preu per unitat:</label>
                <input type="text" className="" id="itemPrice" />€
              </div>
              <div className="col-3 form-group">
                <label htmlFor="itemQuantity">Unitat:</label>
                <input type="text" className="" id="itemQuantity" />€
              </div>
              <div className="col-3 form-group">
                <label htmlFor="discount">Descompte:</label>
                <input type="text" className="" id="discount" />%
              </div>
            </div>
          </form>
          <div className="text-right">
            <button type="submit" className="button">
              {action === "create" ? "Crear" : "Editar"}
            </button>
          </div>
        </div>
      )}

      <table className="table">
        <thead>
          <tr>
            <th
              className="admin-product-col"
              scope="col"
              style={{ width: "30%" }}
            >
              Producte
            </th>
            <th scope="col" style={{ width: "11%" }}>
              Fotografia
            </th>
            <th scope="col" style={{ width: "19,33%" }}>
              Categoria
            </th>
            <th scope="col" style={{ width: "19,33%" }}>
              Data
            </th>
            <th scope="col" style={{ width: "19,33%" }}>
              Editar
            </th>
            <th scope="col" style={{ width: "11%" }}></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <AdminProduct
              toggleForm={toggleForm}
              setAction={setAction}
              product={product}
              key={product._id}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};
