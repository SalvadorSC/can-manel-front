import "./ProductList.css";
import product from "../../assets/product.jpeg";
import { ProductCard } from "../../componentes/ProductCard/ProductCard";

export const ProductList = () => {
  return (
    <>
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
