import { Link } from "react-router-dom";
import "./BasketCard.css";
import basketImage from "../../assets/cistelleseco.png";
import { useContext, useState } from "react";
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
            basketId: basket._id,
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
    <div className="card-father col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card-basket">
        <div className="row">
          <h4 className="card-title-product col-12">{basket.name}</h4>
          <div className="col-5 col-sm-12">
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center align-items-center">
                  <Link to={`/producte/${basket._id}`}>
                    <img
                      className="card-image w-100"
                      src={basket.photoUrl}
                      alt="Producte de Can Mateu"
                    ></img>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-info col">
            <div className="basket-products d-flex align-items-center h-100">
              <p>Veure composició</p>
              <div className="basket-composition">
                {basket.basketProducts.map((product) => (
                  <li key={product._id}>-{product.name}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="card-buy col-12">
          <div className="d-flex justify-content-between align-items-center">
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
        </div>
      </div>
    </div>
  );
};
