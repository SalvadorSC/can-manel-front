import { Link } from "react-router-dom";
import "./BasketCard.css";
import productImage from "../../assets/product.jpeg";
import { useCallback, useContext, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

export const BasketCard = (props) => {
  const { basket, setNProducts, nProducts } = props;
  const [addedToCartMessage, setAddedToCartMessage] = useState(false);
  const [shoppingCart, setShoppingCart] = useState({});
  const { token } = useContext(AuthContext);
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal } = useFetch(urlAPI);

  const myShoppingCart = useCallback(async () => {
    const shoppingCartAPI = await fetchGlobal(
      `${urlAPI}shopping-carts/shopping-cart`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (shoppingCartAPI) {
      setShoppingCart(shoppingCartAPI);
    }
  }, [fetchGlobal, token, urlAPI]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      myShoppingCart();
    }
    return () => {
      isMounted = false;
    };
  }, [myShoppingCart]);

  const addBasket = async (basket) => {
    const productAPI = await fetchGlobal(
      `${urlAPI}shopping-carts/shopping-cart/add/${basket._id}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...basket,
          isBasket: true,
          amount: (() => {
            const productFounded = shoppingCart.products.find((productToFind) =>
              productToFind.basketId
                ? productToFind.basketId === basket._id
                : false
            );
            return productFounded ? productFounded.amount + 1 : 1;
          })(),
        }),
      }
    );
    if (productAPI) {
      addBasketToCart();
    }
  };

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
