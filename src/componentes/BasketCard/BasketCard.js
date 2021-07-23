import { Link } from "react-router-dom";
import "./BasketCard.css";
import productImage from "../../assets/product.jpeg";
import { useState } from "react";

export const BasketCard = (props) => {
  const {
    baskets: { name, basketProducts, priceUnit, _id },
    setNProducts,
    nProducts,
  } = props;
  const [addedToCartMessage, setAddedToCartMessage] = useState(false);

  const addBasketToCart = () => {
    /* Check if there's a cart already. */
    //if(/* yesCart */){
    /* add item to --> shopping-cart/add/:id */
    //} else {
    /* creat new cart --> /new-shopping-cart */
    /* add item to --> shopping-cart/add/:id */
    //}

    /* Add Number of products */
    setNProducts(nProducts + 1);
    /* Show message */
    setAddedToCartMessage(true);
    console.log(addedToCartMessage);
    setTimeout(() => {
      setAddedToCartMessage(false);
      console.log(addedToCartMessage);
    }, 1000);
  };

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
        <div
          className={`added-to-cart-message ${
            addedToCartMessage ? "show" : ""
          }`}
        >
          Afegit!
        </div>
        <button
          className="button card-button"
          onClick={() => {
            addBasketToCart();
          }}
        >
          Afegir
        </button>
      </div>
    </article>
  );
};
