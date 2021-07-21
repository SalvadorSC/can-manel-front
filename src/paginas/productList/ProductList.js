import "./ProductList.css";
import PropTypes from "prop-types";
import { Searcher } from "../../componentes/Searcher/Searcher";
import { ProductCard } from "../../componentes/ProductCard/ProductCard";

export const ProductList = (props) => {
  const { setNumeroProductes, numeroProductes, products } = props;
  return (
    <>
      <Searcher />
      <section className="section">
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              product={product}
              setNumeroProductes={setNumeroProductes}
              numeroProductes={numeroProductes}
              key={product._id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
