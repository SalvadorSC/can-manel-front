import "./ProductList.css";
import PropTypes from "prop-types";
import { Searcher } from "../../componentes/Searcher/Searcher";
import { ProductCard } from "../../componentes/ProductCard/ProductCard";
import { useCallback, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const ProductList = (props) => {
  const { shoppingCart, setShoppingCart, setProductsInCart } = props;
  const [products, setProducts] = useState([]);
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal } = useFetch(urlAPI);

  const loadProducts = useCallback(async () => {
    const productsAPI = await fetchGlobal(`${urlAPI}products/list`);
    if (productsAPI) {
      setProducts(productsAPI);
    }
  }, [fetchGlobal, urlAPI]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <>
      <Searcher products={products} setProducts={setProducts} />
      <section className="section">
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product._id}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              setProductsInCart={setProductsInCart}
            />
          ))}
        </div>
      </section>
    </>
  );
};
