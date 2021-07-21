import { ProductCard } from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";

export const FeaturedProducts = (props) => {
  const { setNumeroProductes, numeroProductes } = props;
  const productsList = [
    {
      name: "Cistella de verdura de 8kg",
      description: "Cisetella de verdura",
      price: 30,
    },
    {
      name: "Cistella de verdura de 8kg",
      description: "Cisetella de verdura",
      price: 30,
    },
    {
      name: "Cistella de verdura de 8kg",
      description: "Cisetella de verdura",
      price: 30,
    },
    {
      name: "Cistella de verdura de 8kg",
      description: "Cisetella de verdura",
      price: 20,
    },
  ];
  return (
    <>
      <div>
        <p className="text-big mt-5">Productes destacats</p>
        <div className="product-list">
          {productsList.map((product) => (
            <ProductCard
              product={product}
              setNumeroProductes={setNumeroProductes}
              numeroProductes={numeroProductes}
            />
          ))}
        </div>
      </div>
    </>
  );
};
