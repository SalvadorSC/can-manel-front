import "./ProductList.css";
import PropTypes from "prop-types";
import { Searcher } from "../../componentes/Searcher/Searcher";
import { ProductCard } from "../../componentes/ProductCard/ProductCard";

export const ProductList = (props) => {
  const { setNProducts, nProducts, products } = props;
  return (
    <>
      <Searcher />
      <section className="section">
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              product={product}
              setNProducts={setNProducts}
              nProducts={nProducts}
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
