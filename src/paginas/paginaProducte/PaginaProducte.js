import "./PaginaProducte.css";
import productImage from "../../assets/product.jpeg";
import { useCallback, useContext, useEffect, useState } from "react";
import { FeaturedProducts } from "../../componentes/FeaturedProducts/FeaturedProducts";
import { Link, useHistory, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useFetch } from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

export const PaginaProducte = (props) => {
  const { shoppingCart, setShoppingCart, setProductsInCart } = props;
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [addedToCartMessage, setAddedToCartMessage] = useState(false);
  const history = useHistory();
  const urlAPI = process.env.REACT_APP_URL_API;
  const { id } = useParams();
  const { fetchGlobal } = useFetch(urlAPI);
  const { token } = useContext(AuthContext);

  const loadProduct = useCallback(async () => {
    const productsAPI = await fetchGlobal(`${urlAPI}products/product/${id}`);
    if (productsAPI) {
      setProduct(productsAPI);
    }
  }, [fetchGlobal, id, urlAPI]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

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
          if (productToFind.productId) {
            if (productToFind.productId === product._id) {
              productToFind.amount = getAmount();
              founded = true;
            }
          }
          return productToFind;
        });
        if (founded) {
          setShoppingCart({ ...shoppingCart, products: productsFounded });
        } else {
          shoppingCart.products.push({ product, amount: 1 });
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
  console.log(product);
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

          <h3>{product.name}</h3>
          <hr></hr>
        </div>
        <div className="row justify-content-center text-right">
          <div className="item-image col-12 col-md-6">
            <img
              src={product.photoUrl}
              alt="Cistella de fruites i verdures de l'hort"
            />
          </div>
          <div className="d-flex flex-column info-item-product col-12 col-md-6">
            <p className="product-description text-left ">
              {product.description}
            </p>
            <div className="price-kg-item mb-4">
              <div className="d-flex justify-content-between">
                <span>Pes per unitat</span>
                <span> 1 kg</span>
              </div>
              <hr />
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="d-flex justify-content-center flex-column"
            >
              <div className="d-flex justify-content-between">
                <span>Nº Unitats:</span>
                <input
                  type="number"
                  defaultValue={1}
                  className="form-control w-auto mb-3 text-right"
                />
              </div>
              <div className="mb-3">
                <span>
                  <span className="price-item-unit"> {product.priceUnit}€</span>{" "}
                  / Unitat
                </span>
              </div>
              <div
                className={`added-to-cart-message ${
                  addedToCartMessage ? "show" : ""
                }`}
              >
                Afegit!
              </div>
              <div className="button-add m-auto">
                <button
                  className="button btn-product-item"
                  onClick={() => {
                    addProduct(product);
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
