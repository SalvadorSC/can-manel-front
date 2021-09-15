import "./BasketList.css";
import { BasketCard } from "../../componentes/BasketCard/BasketCard";
import { useCallback, useEffect, useState } from "react";
import { Loading } from "../../componentes/Loading/Loading";
import { useFetch } from "../../hooks/useFetch";
import { FaSearch } from "react-icons/fa";

export const BasketList = (props) => {
  const { shoppingCart, setShoppingCart, setProductsInCart } = props;
  const [baskets, setBaskets] = useState([]);
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal, loading } = useFetch(urlAPI);
  const loadBaskets = useCallback(async () => {
    const productsAPI = await fetchGlobal(`${urlAPI}baskets/list`);
    if (productsAPI) {
      setBaskets(productsAPI);
    }
  }, [fetchGlobal, urlAPI]);

  useEffect(() => {
    loadBaskets();
  }, [loadBaskets]);

  return (
    <>
      <h2 className="title-products">Cistelles</h2>
      <hr />
      <div className="input-search-mobile row justify-content-center align-items-center mt-2">
        <form className="form-search-mobile col-10 col-lg-8 d-flex align-items-center justify-content-between">
          <input
            type="text"
            id=""
            className="form-control"
            placeholder="Buscar cistelles..."
            required=""
            autoFocus=""
          />
          <button className="btn" type="button">
            <FaSearch />
          </button>
        </form>
      </div>
      <section className="section">
        <div className="product-list row">
          {baskets.map((basket) => (
            <BasketCard
              basket={basket}
              key={basket._id}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              setProductsInCart={setProductsInCart}
            />
          ))}
        </div>
      </section>
      {loading && <Loading />}
    </>
  );
};
