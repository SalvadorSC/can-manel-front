import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import "./ItemShoppingCart.css";
import { useState } from "react";

export const ItemShoppingCart = (props) => {
  const { productImage, product, totalPrice, setTotalPrice } = props;
  const [quantity, setQuantity] = useState(1);

  const minusQuantity = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };
  const plusQuantity = () => {
    if (quantity === product.quantity) {
      return;
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <tr>
        <td className="">
          <img
            className="product-img"
            src={productImage}
            alt="fruites i verdures de l'hort"
          />
        </td>
        <td className="items-table product-item">{product.name}</td>
        <td className="items-table">{product.price}€</td>
        <td className="items-table">
          <div className="number">
            <FaMinus className="icon-counter" onClick={() => minusQuantity()} />
            <input type="text" value={quantity} readOnly />
            <FaPlus className="icon-counter" onClick={() => plusQuantity()} />
          </div>
        </td>
        <td>{product.price * quantity}€</td>
        <td className="items-table">
          <FaTimes className="icon-delete" />
        </td>
      </tr>
    </>
  );
};
