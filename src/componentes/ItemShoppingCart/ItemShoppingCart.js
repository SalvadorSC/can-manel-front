import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import "./ItemShoppingCart.css";
import { useCallback, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const ItemShoppingCart = (props) => {
  const { productImage, amount, product, urlAPI } = props;
  const [quantity, setQuantity] = useState(amount);
  const { fetchGlobal } = useFetch(urlAPI);

  const minusQuantity = () => {
    if (quantity === 1) {
      return;
    } else {
      /* remove item from --> shopping-cart/remove/${product._id} */
      setQuantity(quantity - 1);
    }
  };
  const plusQuantity = () => {
    if (quantity === product.stock) {
      return;
    } else {
      /* add item to --> shopping-cart/add/${product._id} */
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      {product !== null && (
        <tr>
          <td className="d-none d-lg-block">
            <img
              className="product-img"
              src={productImage}
              alt="fruites i verdures de l'hort"
            />
          </td>
          <td className="items-table product-item">{product.name}</td>
          <td className="items-table">{product.priceUnit}€</td>
          <td className="items-table">
            <div className="number">
              <FaMinus
                className="icon-counter"
                onClick={() => minusQuantity()}
              />
              <input type="text" value={quantity} readOnly />
              <FaPlus className="icon-counter" onClick={() => plusQuantity()} />
            </div>
          </td>
          <td className="table-total-price d-none d-md-block">
            {Math.floor(amount * product.priceUnit * 100) / 100}€
          </td>
          <td className="items-table">
            <FaTimes className="icon-delete" />
          </td>
        </tr>
      )}
    </>
  );
};
