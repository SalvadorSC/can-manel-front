import "./PaginaBasket.css";
import productImage from "../../assets/product.jpeg";
import { useCallback, useContext, useEffect, useState } from "react";
import { FeaturedProducts } from "../../componentes/FeaturedProducts/FeaturedProducts";
import { Link, useHistory, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AddedToCartMessage } from "../../componentes/AddedToCartMessage/AddedToCartMessage";
import { useFetch } from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

export const PaginaBasket = (props) => {
  const { shoppingCart, setShoppingCart, setProductsInCart } = props;
  const [quantity, setQuantity] = useState(1);
  const [basket, setBasket] = useState({});
  const [addedToCartMessage, setAddedToCartMessage] = useState(false);
  const [basketIncludedProducts, setBasketIncludedProducts] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const history = useHistory();
  const urlAPI = process.env.REACT_APP_URL_API;
  const { id } = useParams();
  const { fetchGlobal } = useFetch(urlAPI);
  const { token } = useContext(AuthContext);

  const loadProduct = useCallback(async () => {
    const productsAPI = await fetchGlobal(`${urlAPI}baskets/basket/${id}`);
    if (productsAPI) {
      setBasket(productsAPI);
    }
    setBasketIncludedProducts(
      productsAPI.basketProducts.map((product) => <li>- {product.name}</li>)
    );
  }, [fetchGlobal, id, urlAPI]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

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
          amount: (() => {
            if (shoppingCart.products) {
              const productFounded = shoppingCart.products.find(
                (productToFind) =>
                  productToFind.basketId
                    ? productToFind.basketId === basket._id
                    : false
              );
              return productFounded ? productFounded.amount + 1 : 1;
            } else {
              return 1;
            }
          })(),
          shoppingCartId: shoppingCart._id,
        }),
      }
    );
    if (productAPI) {
      setShoppingCart(productAPI);
      addBasketToCart();
      setProductsInCart(productAPI.products.length);
    }
  };

  const addBasketToCart = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };

  return (
    <>
      <section className="product-section">
        <div className="product-name">
          <Link
            to=""
            onClick={() => history.goBack()}
            className="return-link d-flex align-items-center"
          >
            <FaArrowLeft className="mr-2" />
            Tornar
          </Link>

          <h3>{basket.name}</h3>
          <hr></hr>
        </div>
        <div className="row justify-content-center text-right">
          <div className="item-image col-12 col-md-6">
            <img
              src={productImage}
              alt="Cistella de fruites i verdures de l'hort"
            />
          </div>
          <div className="info-item-product col-12 col-md-6">
            <p className="text-left mb-3">{basket.description}</p>
            <p className="included-products-title text-left mb-2">
              Productes inclosos:
            </p>
            <ul className="included-products-list text-left pl-0">
              {basketIncludedProducts}
            </ul>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="d-flex justify-content-center flex-column"
            >
              <div className="d-flex justify-content-between align-items-end mb-4">
                <span>Nº Unitats:</span>
                <input
                  type="number"
                  defaultValue={1}
                  max={basket.stock}
                  min={1}
                  className="form-control w-auto text-right"
                />
              </div>
              <div>
                <span>
                  <span className="price-item-unit"> {basket.priceUnit}€</span>{" "}
                  / Unitat
                </span>
              </div>
              <div
                className={`message-added-to-cart ${
                  showMessage ? "show" : ""
                } d-flex justify-content-center mb-3`}
              >
                <AddedToCartMessage product={basket} />
              </div>

              <div className="button-add m-auto">
                <button
                  className="button btn-product-item"
                  onClick={() => {
                    addBasket(basket);
                  }}
                >
                  Afegir al carro
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <FeaturedProducts />
    </>
  );
};
