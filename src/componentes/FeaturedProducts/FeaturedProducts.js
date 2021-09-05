import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";

export const FeaturedProducts = () => {
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
      <div>
        <p className="text-big mt-5">Productes destacats</p>
        <div className="product-list row">
          {products.slice(0, 4).map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
};
