import { Link } from "react-router-dom";
import "./BasketCard.css";
import productImage from "../../assets/product.jpeg";

export const BasketCard = (props) => {
  const {
    baskets: { name, basketProducts, priceUnit, setNProducts, nProducts, _id },
  } = props;
  return (
    <article className="card">
      <img
        className="card-image"
        src={productImage}
        alt="Cistella de fruites i verdures de l'hort"
      ></img>
      <div className="card-info">
        <Link to={`/cistella/${_id}`}>
          <h4 className="card-title">{name}</h4>
        </Link>
      </div>
      <div className="basket-products">
        <p>Veure composició</p>
        <div className="basket-composition">
          {basketProducts.map((product) => (
            <li>-{product.name}</li>
          ))}
        </div>
      </div>
      <div className="card-buy d-flex align-items-center justify-content-between">
        <span className="card-price">{priceUnit}€</span>
        <button
          className="button card-button"
          onClick={() => setNProducts(nProducts + 1)}
        >
          Comprar
        </button>
      </div>
    </article>
  );
};
