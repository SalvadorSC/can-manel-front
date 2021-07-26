import { useCallback, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AdminProduct } from "../../componentes/AdminProduct/AdminProduct";
import "./AdminProductList.css";
import { AdminForm } from "../../componentes/AdminForm/AdminForm";
import { useFetch } from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

export const AdminProductList = (props) => {
  const { fetchGlobal } = props;
  const [formOpen, setFormOpen] = useState(false);
  const [action, setAction] = useState(null);
  const [productEdited, setProductEdited] = useState(null);
  const [products, setProducts] = useState([]);
  const { token } = useContext(AuthContext);
  const toggleForm = (boolean) => {
    boolean ? setFormOpen(boolean) : setFormOpen(!formOpen);
  };
  const urlAPI = process.env.REACT_APP_URL_API;

  const loadProducts = useCallback(async () => {
    const productsAPI = await fetchGlobal(`${urlAPI}products/list`);
    if (productsAPI) {
      setProducts(productsAPI);
    }
  }, [fetchGlobal, urlAPI]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const deleteProduct = async (item) => {
    const resp = await fetchGlobal(urlAPI + "products/product/" + item._id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setProducts(products.filter((product) => product._id !== item._id));
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
            loadProducts={loadProducts}
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
              toggleForm={toggleForm}
              setAction={setAction}
              loadProducts={loadProducts}
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
  fetchGlobal: PropTypes.func.isRequired,
};
