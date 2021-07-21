import PropTypes from "prop-types";
import { ProductCard } from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";

export const FeaturedProducts = (props) => {
  const { setNumeroProductes, numeroProductes, products } = props;

  return (
    <>
      <div>
        <p className="text-big mt-5">Productes destacats</p>
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
      </div>
    </>
  );
};

FeaturedProducts.propTypes = {
  products: PropTypes.array.isRequired,
};
