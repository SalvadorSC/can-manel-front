import "./ProductList.css";
import product from "../../assets/product.jpeg";
import { Searcher } from "../../componentes/Searcher/Searcher";
import { ProductCard } from "../../componentes/ProductCard/ProductCard";


export const ProductList = () => {
  return (
    <>
      <Searcher />
      <section className="section">
        <div className="product-list">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
};
