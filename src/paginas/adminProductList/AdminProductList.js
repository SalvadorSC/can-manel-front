import { useState } from "react";
import PropTypes from "prop-types";
import { AdminProduct } from "../../componentes/AdminProduct/AdminProduct";
import "./AdminProductList.css";
import { AdminForm } from "../../componentes/AdminForm/AdminForm";
import { useFetch } from "../../hooks/useFetch";

export const AdminProductList = (props) => {
  const { products, setProducts, urlAPI, fetchGlobal } = props;
  const [formOpen, setFormOpen] = useState(false);
  const [action, setAction] = useState(null);
  const [productEdited, setProductEdited] = useState(null);

  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  const deleteProduct = async (id) => {
    const resp = await fetchGlobal(urlAPI + "products/product/" + id, {
      method: "DELETE",
    });
    if (resp.ok) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <>
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
          <AdminForm
            action={action}
            toggleForm={toggleForm}
            productEdited={productEdited}
            urlAPI={urlAPI}
          />
        )}
        <div className="table-product row">
          <div className="col-12">
            <div className="table-titles row">
              <div className="col-4">
                <p>Producte</p>
              </div>
              <div className="col-2">
                <p>Fotografia</p>
              </div>
              <div className="col-2">
                <p>Categoria</p>
              </div>
              <div className="col-1">
                <p>Data</p>
              </div>
              <div className="col-2 text-center">
                <p>Editar</p>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
          {products.map((product) => (
            <AdminProduct
              product={product}
              key={product._id}
              setAction={setAction}
              deleteProduct={deleteProduct}
              setProductEdited={setProductEdited}
            />
          ))}
        </div>
      </section>
    </>
  );
};

AdminProductList.propTypes = {
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
  urlAPI: PropTypes.string.isRequired,
  fetchGlobal: PropTypes.func.isRequired,
};
