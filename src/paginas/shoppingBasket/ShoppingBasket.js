import "./shoppingBasket.css";
import productImage from "../../assets/lettuce-product.jpg";
import { ItemShoppingCart } from "../../componentes/ItemShoppingCart/ItemShoppingCart";
import { useCallback, useContext, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

export const ShoppingBasket = (props) => {
  const { token } = useContext(AuthContext);
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal } = useFetch(urlAPI);
  const [shoppingCart, setShoppingCart] = useState({});
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  const loadShoppingCart = useCallback(async () => {
    const shoppingCartApi = await fetchGlobal(
      `${urlAPI}shopping-carts/shopping-cart/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (shoppingCartApi) {
      setShoppingCart(shoppingCartApi);
      return shoppingCartApi;
    }
  }, [fetchGlobal, token, urlAPI]);

  useEffect(() => {
    loadShoppingCart();
  }, [loadShoppingCart]);
  useEffect(() => {
    if (shoppingCart.products && shoppingCart.products !== null) {
      setShoppingCartItems(
        shoppingCart.products.map((product) => (
          <ItemShoppingCart key={product._id} product={product} token={token} />
        ))
      );
    }
  }, [shoppingCart, token, urlAPI]);

  return (
    <section>
      <div className="header-section mb-6">
        <h2>Carro de la compra</h2>
        <hr />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th
              className="d-none d-lg-table-cell"
              scope="col"
              style={{ width: "10%" }}
            ></th>
            <th className="product-col" scope="col" style={{ width: "25%" }}>
              Producte
            </th>
            <th scope="col" style={{ width: "18,33%" }}>
              Preu
            </th>
            <th scope="col" style={{ width: "18,33%" }}>
              Quantitat
            </th>
            <th
              className="d-none d-md-table-cell"
              scope="col"
              style={{ width: "18,33%" }}
            >
              Total
            </th>
            <th scope="col" style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>{shoppingCartItems}</tbody>
      </table>
      <div className="total">
        <div className="row">
          <div className="col-8">TOTAL</div>
          <div className="col-4 text-right">{shoppingCart.price}€</div>
        </div>
      </div>
      <div className="order-button">
        <button className="button btn-order py-2">Passar per caixa</button>
      </div>
    </section>
  );
};
