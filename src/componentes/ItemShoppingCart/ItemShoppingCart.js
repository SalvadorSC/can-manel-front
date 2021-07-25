import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import "./ItemShoppingCart.css";
import { useCallback, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const ItemShoppingCart = (props) => {
  const { product, token } = props;
  const [quantity, setQuantity] = useState(product.amount);
  const [productData, setProductData] = useState({});
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal } = useFetch(urlAPI);

  const element = product.productId ? "product" : "basket";
  const productOrBasketId =
    element === "product" ? product.productId : product.basketId;

  const loadElement = useCallback(
    async (element) => {
      const productAPI = await fetchGlobal(
        `${urlAPI}${element}s/${element}/${productOrBasketId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (productAPI) {
        setProductData(productAPI);
      }
    },
    [fetchGlobal, productOrBasketId, token, urlAPI]
  );

  useEffect(() => {
    loadElement(element);
  }, [element, loadElement]);

  const modifyProduct = async (product, modifyOrDelete) => {
    const isModify = modifyOrDelete ? "add" : "remove";
    const productAPI = await fetchGlobal(
      `${urlAPI}shopping-carts/shopping-cart/${isModify}/${productOrBasketId}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    if (productAPI) {
      setProductData(productAPI);
      setQuantity(product.amount);
    }
  };

  const minusQuantity = () => {
    if (quantity === 1) {
      return;
    } else {
      modifyProduct(
        {
          amount: quantity - 1,
          isBasket: element === "basket",
        },
        true
      );
      loadElement(element);
    }
  };
  const plusQuantity = () => {
    if (quantity === productData.stock) {
      return;
    } else {
      modifyProduct(
        {
          amount: quantity + 1,
          isBasket: element === "basket",
        },
        true
      );
      loadElement(element);
    }
  };
  const removeItem = () => {
    modifyProduct(
      {
        isBasket: element === "basket",
      },
      false
    );
    loadElement(element);
  };

  return (
    <>
      {product !== null && (
        <tr>
          <td className="d-none d-lg-block">
            <img
              className="product-img"
              src={productData.urlPhoto}
              alt="fruites i verdures de l'hort"
            />
          </td>
          <td className="items-table product-item">{productData.name}</td>
          <td className="items-table">{productData.priceUnit}€</td>
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
            {Math.round(product.price * 100) / 100}€
          </td>
          <td className="items-table">
            <FaTimes className="icon-delete" onClick={() => removeItem()} />
          </td>
        </tr>
      )}
    </>
  );
};
