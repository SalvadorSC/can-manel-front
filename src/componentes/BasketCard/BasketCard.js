import { Link } from "react-router-dom";
import "./BasketCard.css";
import productImage from "../../assets/product.jpeg";
import { useCallback, useContext, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

export const BasketCard = (props) => {
  const { basket, shoppingCart, setShoppingCart, setProductsInCart } = props;
  const [addedToCartMessage, setAddedToCartMessage] = useState(false);
  const { token } = useContext(AuthContext);
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal } = useFetch(urlAPI);

  const getAmount = () => {
    if (shoppingCart.products) {
      const productFounded = shoppingCart.products.find((productToFind) =>
        productToFind.basketId ? productToFind.basketId === basket._id : false
      );
      return productFounded ? productFounded.amount + 1 : 1;
    } else {
      return 1;
    }
  };

  const addBasket = async (basket) => {
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
    const productAPI = await fetchGlobal(
      `${urlAPI}shopping-carts/shopping-cart/add/${basket._id}`,
      {
        method: "PUT",
        headers: header,
        body: JSON.stringify({
          isBasket: true,
          amount: getAmount(),
          shoppingCartId: shoppingCart._id,
        }),
      }
    );
    if (productAPI) {
      let founded = false;
      if (shoppingCart.products) {
        const productsFounded = shoppingCart.products.map((productToFind) => {
          if (productToFind.basketId && productToFind.basketId === basket._id) {
            const modifiedProduct = {
              amount: getAmount(),
              basketId: basket._id,
              price: getAmount() * basket.priceUnit,
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
        } else {
          shoppingCart.products.push({
            productId: basket._id,
            price: basket.priceUnit,
            amount: 1,
          });
          shoppingCart.price += basket.priceUnit;
          setShoppingCart(shoppingCart);
          setProductsInCart(productAPI.products.length + 1);
        }
      }
      addBasketToCart();
    }
  };

  const addBasketToCart = () => {
    setAddedToCartMessage(true);
    setTimeout(() => {
      setAddedToCartMessage(false);
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
        <Link to={`/cistella/${basket._id}`}>
          <h4 className="card-title">{basket.name}</h4>
        </Link>
      </div>
      <div className="basket-products">
        <p>Veure composició</p>
        <div className="basket-composition">
          {basket.basketProducts.map((product) => (
            <li key={product._id}>-{product.name}</li>
          ))}
        </div>
      </div>
      <div className="card-buy d-flex align-items-center justify-content-between">
        <span className="card-price">{basket.priceUnit}€</span>
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
            addBasket(basket);
          }}
        >
          Afegir
        </button>
      </div>
    </article>
  );
};
