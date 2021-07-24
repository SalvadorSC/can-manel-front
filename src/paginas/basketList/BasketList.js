import "./BasketList.css";
import { Searcher } from "../../componentes/Searcher/Searcher";
import { ProductCard } from "../../componentes/ProductCard/ProductCard";
import { BasketCard } from "../../componentes/BasketCard/BasketCard";
import { useCallback, useEffect, useState } from "react";

export const BasketList = (props) => {
  const {
    setNumeroProductes,
    numeroProductes,
    fetchGlobal,
    setNProducts,
    nProducts,
  } = props;
  const [baskets, setBaskets] = useState([]);

  const urlAPI = process.env.REACT_APP_URL_API;

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
          {baskets.map((baskets) => (
            <BasketCard
              baskets={baskets}
              setNumeroProductes={setNumeroProductes}
              numeroProductes={numeroProductes}
              key={baskets._id}
              setNProducts={setNProducts}
              nProducts={nProducts}
            />
          ))}
        </div>
      </section>
    </>
  );
};
