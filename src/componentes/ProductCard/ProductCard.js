import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import productImage from "../../assets/product.jpeg";
import "./ProductCard.css";

export const ProductCard = (props) => {
  const { setNumeroProductes, numeroProductes, product } = props;
  return (
    <>
      <article className="card">
        <img
          className="card-image"
          src={productImage}
          alt="Cistella de fruites i verdures de l'hort"
        ></img>
        <div className="card-info">
          <Link to="./producte">
            <h4 className="card-title">{product.name}</h4>
          </Link>
          <p className="card-description">{product.description}</p>
        </div>
        <div className="card-buy d-flex align-items-center justify-content-between">
          <span className="card-price">{product.priceUnit}€</span>
          <button
            className="button card-button"
            onClick={() => setNumeroProductes(numeroProductes + 1)}
          >
            Comprar
          </button>
        </div>
      </article>
    </>
  );
};

ProductCard.propTypes = {
  products: PropTypes.array.isRequired,
};
