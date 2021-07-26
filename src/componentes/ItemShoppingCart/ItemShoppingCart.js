import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import "./ItemShoppingCart.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

export const ItemShoppingCart = (props) => {
  const { product, token, shoppingCart, setShoppingCart, setProductsInCart } =
    props;
  const [quantity, setQuantity] = useState(product.amount);
  const [price, setPrice] = useState(product.price);
  const [deletedProduct, setDeletedProduct] = useState(false);
  const [productData, setProductData] = useState(product);
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal } = useFetch(urlAPI);
  const { totalPrice, setTotalPrice } = useContext(AuthContext);

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
    let header = {};
    if (token) {
      header = {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      };
    } else {
      header = {
        "Content-Type": "application/json",
      };
    }
    const isModify = modifyOrDelete ? "add" : "remove";
    const productAPI = await fetchGlobal(
      `${urlAPI}shopping-carts/shopping-cart/${isModify}/${productOrBasketId}`,
      {
        method: "PUT",
        headers: header,
        body: JSON.stringify({ ...product, shoppingCartId: shoppingCart._id }),
      }
    );
    if (productAPI) {
      let founded = false;
      if (shoppingCart.products && modifyOrDelete) {
        const productsFounded = shoppingCart.products.map((productToFind) => {
          if (
            (productToFind.basketId &&
              productToFind.basketId === productOrBasketId) ||
            (productToFind.productId &&
              productToFind.productId === productOrBasketId)
          ) {
            const modifiedProduct = {
              amount: quantity,
              productId: !product.isBasket ? productOrBasketId : undefined,
              basketId: product.isBasket ? productOrBasketId : undefined,
              price: quantity * product.priceUnit,
            };
            productToFind = modifiedProduct;
            founded = true;
          }
          return productToFind;
        });
        if (founded) {
          shoppingCart.products = productsFounded;
          shoppingCart.price = productsFounded.reduce(
            (acumulator, { price }) => {
              acumulator += price;
              return acumulator;
            },
            0
          );
          setShoppingCart(shoppingCart);
        }
        console.log(shoppingCart);
      }
      setProductsInCart(
        modifyOrDelete
          ? shoppingCart.products.length
          : shoppingCart.products.length - 1
      );
      if (!modifyOrDelete) {
        setDeletedProduct(true);
        setTotalPrice(totalPrice - price);
      } else {
        setQuantity(quantity);
        setPrice(quantity * productData.priceUnit);
      }
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
      setTotalPrice(totalPrice - productData.priceUnit);
    }
    setQuantity(quantity - 1);
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
      setQuantity(quantity + 1);
      setTotalPrice(totalPrice + productData.priceUnit);
    }
  };
  const removeItem = () => {
    modifyProduct(
      {
        isBasket: element === "basket",
      },
      false
    );
    setTotalPrice(totalPrice - productData.priceUnit * quantity);
    setQuantity(product.amount);
  };

  return (
    <>
      {deletedProduct === false && (
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
            {Math.round(price * 100) / 100}€
          </td>
          <td className="items-table">
            <FaTimes className="icon-delete" onClick={() => removeItem()} />
          </td>
        </tr>
      )}
    </>
  );
};
