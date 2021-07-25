import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import productImage from "../../assets/product.jpeg";
import "./ProductCard.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useFetch } from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

export const ProductCard = (props) => {
  const { setNProducts, nProducts, product } = props;
  const { setLocalCart, localCart } = useContext(CartContext);
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

  const addProduct = async (product) => {
    const productAPI = await fetchGlobal(
      `${urlAPI}shopping-carts/shopping-cart/add/${product._id}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product,
          isBasket: false,
          amount: (() => {
            const productFounded = shoppingCart.products.find((productToFind) =>
              productToFind.productId
                ? productToFind.productId === product._id
                : false
            );
            return productFounded ? productFounded.amount + 1 : 1;
          })(),
        }),
      }
    );
    if (productAPI) {
      addProductToCart();
    }
  };

  const addProductToCart = () => {
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
    <>
      <article className="card">
        <img
          className="card-image"
          src={productImage}
          alt="Cistella de fruites i verdures de l'hort"
        ></img>
        <div className="card-info">
          <Link to={`/producte/${product._id}`}>
            <h4 className="card-title">{product.name}</h4>
          </Link>
          <p className="card-description">{product.description}</p>
        </div>
        <div className="card-buy d-flex align-items-center justify-content-between">
          <span className="card-price">{product.priceUnit}€</span>
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
              addProduct(product);
            }}
          >
            Afegir
          </button>
        </div>
      </article>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
