import "./ItemProductCard.css";
import productImage from "../../assets/product.jpeg";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";

export const ItemProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  const minusQuantity = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };
  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <>
      <section className="product-section">
        <div className="product-name">
          <h3 c>Nom del Producte</h3>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="item-image col-12 col-md-6">
            <img
              src={productImage}
              alt="Cistella de fruites i verdures de l'hort"
            />
          </div>
          <div className="info-item-product col-12 col-md-6">
            <div className="price-kg-item mb-1">
              <span>
                Preu per quilo <span className="price-kg"> 1,25€</span>
              </span>
            </div>
            <div className="mb-4">
              <span>
                <span className="price-item-unit"> 1€</span> / Unitat aprox.
              </span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="counter-item">
                <FaMinus
                  className="icon-counter-item"
                  onClick={() => minusQuantity()}
                />
                <input type="text" value={quantity} readOnly />
                <FaPlus
                  className="icon-counter-item"
                  onClick={() => plusQuantity()}
                />
              </div>
              <div className="button-add">
                <button className="button btn-product-item">Afegir</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
