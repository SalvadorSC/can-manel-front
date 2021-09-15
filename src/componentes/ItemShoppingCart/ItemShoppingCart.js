import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import "./ItemShoppingCart.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

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

  const modifyProduct = async (productToModify, modifyOrDelete) => {
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
    const resp = await fetch(
      `${urlAPI}shopping-carts/shopping-cart/${isModify}/${productOrBasketId}`,
      {
        method: "PUT",
        headers: header,
        body: JSON.stringify({
          ...productToModify,
          shoppingCartId: shoppingCart._id,
        }),
      }
    );
    const productAPI = resp.json();
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
              amount: productToModify.amount,
              productId: !productToModify.isBasket
                ? productOrBasketId
                : undefined,
              basketId: productToModify.isBasket
                ? productOrBasketId
                : undefined,
              price: productToModify.amount * productData.priceUnit,
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
          setPrice(productToModify.amount * productData.priceUnit);
        }
      } else if (!modifyOrDelete) {
        setDeletedProduct(true);
        shoppingCart.products = shoppingCart.products.filter(
          (productToFilter) => {
            if (
              productToFilter.basketId &&
              productToFilter.basketId !== productOrBasketId
            ) {
              return true;
            }
            if (
              productToFilter.productId &&
              productToFilter.productId !== productOrBasketId
            ) {
              return true;
            }
            return false;
          }
        );
        setShoppingCart(shoppingCart);
      }
      setProductsInCart(
        modifyOrDelete
          ? shoppingCart.products.length
          : shoppingCart.products.length - 1
      );
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
      setQuantity(quantity - 1);
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
    setQuantity(1);
  };

  return (
    <>
      {deletedProduct === false && (
        <tr>
          <td className="d-none d-lg-block">
            <Link
              to={
                element === "product"
                  ? `/producte/${productData._id}`
                  : `/cistella/${productData._id}`
              }
            >
              <img
                className="product-img"
                src={productData.photoUrl}
                alt="fruites i verdures de l'hort"
              />
            </Link>
          </td>
          <td className="items-table product-item">
            <Link
              to={
                element === "product"
                  ? `/producte/${productData._id}`
                  : `/cistella/${productData._id}`
              }
            >
              {productData.name}
            </Link>
          </td>
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
          <td className="items-table">
            <div className="d-none d-sm-block">
              {Math.round(price * 100) / 100}€
            </div>
          </td>
          <td className="items-table">
            <FaTimes className="icon-delete" onClick={() => removeItem()} />
          </td>
        </tr>
      )}
    </>
  );
};
