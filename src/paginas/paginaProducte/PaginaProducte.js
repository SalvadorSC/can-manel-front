import "./PaginaProducte.css";
import productImage from "../../assets/product.jpeg";
import { useState } from "react";
import { FeaturedProducts } from "../../componentes/FeaturedProducts/FeaturedProducts";
import { Link, useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const PaginaProducte = (props) => {
  const { setNProducts, nProducts, products } = props;
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
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

          <h3>Nom del Producte</h3>
          <hr></hr>
        </div>
        <div className="row justify-content-center text-right">
          <div className="item-image col-12 col-md-6">
            <img
              src={productImage}
              alt="Cistella de fruites i verdures de l'hort"
            />
          </div>
          <div className="info-item-product col-12 col-md-6">
            <p className="text-left mb-5">
              Descripció: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Impedit quae reiciendis rerum beatae numquam ipsam nam
              dolorum, quod, aperiam, nulla sapiente explicabo consectetur
              excepturi nesciunt quidem. Sint quos impedit laudantium?
            </p>
            <div className="price-kg-item mb-1 d-flex justify-content-between">
              <span>Pes per unitat</span>
              <span> 1 kg</span>
            </div>
            <div className="mb-4">
              <span>
                <span className="price-item-unit"> 1€</span> / Unitat
              </span>
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
                  className="form-control w-auto mb-5 text-right"
                />
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
