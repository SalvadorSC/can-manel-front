import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProductCard.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useFetch } from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

export const ProductCard = (props) => {
  const { product, shoppingCart, setShoppingCart, setProductsInCart } = props;
  const [addedToCartMessage, setAddedToCartMessage] = useState(false);
  const { token } = useContext(AuthContext);
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal } = useFetch(urlAPI);

  const getAmount = () => {
    if (shoppingCart.products) {
      const productFounded = shoppingCart.products.find((productToFind) =>
        productToFind.productId
          ? productToFind.productId === product._id
          : false
      );
      return productFounded ? productFounded.amount + 1 : 1;
    } else {
      return 1;
    }
  };

  const addProduct = async (product) => {
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
      `${urlAPI}shopping-carts/shopping-cart/add/${product._id}`,
      {
        method: "PUT",
        headers: header,
        body: JSON.stringify({
          isBasket: false,
          amount: getAmount(),
          shoppingCartId: shoppingCart._id,
        }),
      }
    );
    if (productAPI) {
      let founded = false;
      if (shoppingCart.products) {
        const productsFounded = shoppingCart.products.map((productToFind) => {
          if (
            productToFind.productId &&
            productToFind.productId === product._id
          ) {
            const modifiedProduct = {
              amount: getAmount(),
              productId: product._id,
              price: getAmount() * product.priceUnit,
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
            productId: product._id,
            price: product.priceUnit,
            amount: 1,
          });
          shoppingCart.price += product.priceUnit;
          setShoppingCart(shoppingCart);
          setProductsInCart(productAPI.products.length + 1);
        }
      }
      addProductToCart();
    }
  };

  const addProductToCart = () => {
    setAddedToCartMessage(true);
    setTimeout(() => {
      setAddedToCartMessage(false);
    }, 1000);
  };

  return (
    <>
      <article className="card">
        <img
          className="card-image"
          src={product.photoUrl}
          alt="Producte de Can Mateu"
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
