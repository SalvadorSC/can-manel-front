import "./BasketList.css";
import { BasketCard } from "../../componentes/BasketCard/BasketCard";
import { useCallback, useEffect, useState } from "react";
import { Loading } from "../../componentes/Loading/Loading";
import { useFetch } from "../../hooks/useFetch";

export const BasketList = (props) => {
  const { shoppingCart, setShoppingCart, setProductsInCart } = props;
  const [baskets, setBaskets] = useState([]);
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal, loading } = useFetch(urlAPI);
  console.log(loading);
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
      <section className="section">
        <div className="product-list">
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
