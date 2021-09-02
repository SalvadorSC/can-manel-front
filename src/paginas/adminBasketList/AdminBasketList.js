import { useCallback, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./AdminBasketList.css";
import { AdminForm } from "../../componentes/AdminForm/AdminForm";
import { AuthContext } from "../../context/AuthContext";
import { AdminBasket } from "../../componentes/AdminBasket/AdminBasket";

export const AdminBasketList = (props) => {
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
    const productsAPI = await fetchGlobal(`${urlAPI}baskets/list`);
    if (productsAPI) {
      setProducts(productsAPI);
    }
  }, [fetchGlobal, urlAPI]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const deleteProduct = async (item) => {
    const resp = await fetchGlobal(urlAPI + "baskets/basket/" + item._id, {
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
        <h2>Llista de Cistelles</h2>
        <hr />
        <div className="create-item d-flex justify-content-center align-items-center">
          <p>Afegir una nova cistella</p>
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
        {formOpen && (
          <AdminForm
            action={action}
            loadProducts={loadProducts}
            toggleForm={toggleForm}
            productEdited={productEdited}
            urlAPI={urlAPI}
          />
        )}
        <div className="table-product row mt-5">
          <div className="col-12">
            <div className="table-titles row">
              <div className="col-4">
                <p>Cistella</p>
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
            <AdminBasket
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

AdminBasketList.propTypes = {
  fetchGlobal: PropTypes.func.isRequired,
};
