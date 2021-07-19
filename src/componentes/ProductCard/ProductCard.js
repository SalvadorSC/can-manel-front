import product from "../../assets/product.jpeg";
import "./ProductCard.css";

export const ProductCard = (props) => {
  const { setNumeroProductes, numeroProductes } = props;
  return (
    <>
      <article className="card">
        <img
          className="card-image"
          src={product}
          alt="Cistella de fruites i verdures de l'hort"
        ></img>
        <div className="card-info">
          <h4 className="card-title">Cistella de verdura 8kg</h4>
          <p className="card-description">Cistella de verdura</p>
        </div>
        <div className="card-buy d-flex align-items-center justify-content-between">
          <span className="card-price">30 €</span>
          <button
            className="button card-button"
            onClick={() => setNumeroProductes(numeroProductes + 1)}
          >
            comprar
          </button>
        </div>
      </article>
    </>
  );
};
