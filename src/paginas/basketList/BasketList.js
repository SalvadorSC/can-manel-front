import "./BasketList.css";
import { ProductCard } from "../../componentes/ProductCard/ProductCard";

export const BasketList = () => {
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
