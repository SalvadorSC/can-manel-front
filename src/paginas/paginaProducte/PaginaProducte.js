import "./PaginaProducte.css";
import productImage from "../../assets/product.jpeg";
import { useCallback, useEffect, useState } from "react";
import { FeaturedProducts } from "../../componentes/FeaturedProducts/FeaturedProducts";
import { Link, useHistory, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useFetch } from "../../hooks/useFetch";

export const PaginaProducte = (props) => {
  const { setNProducts, nProducts, products } = props;
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const history = useHistory();
  const urlAPI = process.env.REACT_APP_URL_API;
  const { id } = useParams();
  const { fetchGlobal } = useFetch(urlAPI);
  const loadProduct = useCallback(async () => {
    const productsAPI = await fetchGlobal(`${urlAPI}products/product/${id}`);
    if (productsAPI) {
      setProduct(productsAPI);
    }
  }, [fetchGlobal, id, urlAPI]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);
  return (
    <>
      <section className="product-section">
        <div className="product-name">
          <Link
            to=""
            onClick={() => history.goBack()}
            className="return-link d-flex align-items-center"
          >
            <FaArrowLeft className="mr-2" />
            Tornar
          </Link>

          <h3>{product.name}</h3>
          <hr></hr>
        </div>
        <div className="row justify-content-center text-right">
          <div className="item-image col-12 col-md-6">
            <img
              src={productImage}
              alt="Cistella de fruites i verdures de l'hort"
            />
          </div>
          <div className="d-flex flex-column info-item-product col-12 col-md-6">
            <p className="product-description text-left ">
              {product.description}
            </p>
            <div className="price-kg-item mb-4">
              <div className="d-flex justify-content-between">
                <span>Pes per unitat</span>
                <span> 1 kg</span>
              </div>
              <hr />
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="d-flex justify-content-center flex-column"
            >
              <div className="d-flex justify-content-between">
                <span>Nº Unitats:</span>
                <input
                  type="number"
                  defaultValue={1}
                  className="form-control w-auto mb-3 text-right"
                />
              </div>
              <div className="mb-3">
                <span>
                  <span className="price-item-unit"> {product.priceUnit}€</span>{" "}
                  / Unitat
                </span>
              </div>
              <div className="button-add m-auto">
                <button
                  className="button btn-product-item"
                  onClick={() => setNProducts(nProducts + quantity)}
                >
                  Afegir al carro
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <FeaturedProducts
        setNProducts={setNProducts}
        products={products}
        nProducts={nProducts}
      />
    </>
  );
};
