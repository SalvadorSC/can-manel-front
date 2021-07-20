import "./BasketList.css";
import { Searcher } from "../../componentes/Searcher/Searcher";
import { ProductCard } from "../../componentes/ProductCard/ProductCard";

export const BasketList = (props) => {
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
      <section className="section">
        <div className="product-list">
          {productsList.map((product) => (
            <ProductCard
              product={product}
              setNumeroProductes={setNumeroProductes}
              numeroProductes={numeroProductes}
            />
          ))}
        </div>
      </section>
    </>
  );
};
