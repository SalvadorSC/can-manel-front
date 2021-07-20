import { FaStar, FaArrowRight, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductCard } from "../../componentes/ProductCard/ProductCard";
import "./HomePage.css";

export const HomePage = (props) => {
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
    <main>
      <div>
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="homepage-element d-flex align-items-end mb-3">
              <div className="d-flex align-items-center">
                <p>Tria la teva cistella</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex flex-column justify-content-between">
            <Link
              to="./sobre-nosaltres"
              className="homepage-element homepage-element-small d-flex align-items-end mb-3"
            >
              <div className="d-flex align-items-center">
                <p>Qui som</p>
              </div>
            </Link>
            <div className="homepage-element homepage-element-small d-flex align-items-end mb-3">
              <div className="d-flex align-items-center">
                <p>Cerca activitats!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </main>
  );
};
