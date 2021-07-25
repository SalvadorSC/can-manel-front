import "./BasketList.css";
import { Searcher } from "../../componentes/Searcher/Searcher";
import { ProductCard } from "../../componentes/ProductCard/ProductCard";
import { BasketCard } from "../../componentes/BasketCard/BasketCard";
import { useCallback, useEffect, useState } from "react";

export const BasketList = (props) => {
  const { fetchGlobal, setNProducts, nProducts } = props;
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
          {baskets.map((basket) => (
            <BasketCard
              basket={basket}
              setNProducts={setNProducts}
              key={basket._id}
              nProducts={nProducts}
            />
          ))}
        </div>
      </section>
    </>
  );
};
