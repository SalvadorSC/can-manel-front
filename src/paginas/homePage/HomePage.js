import { FaStar, FaArrowRight, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductCard } from "../../componentes/ProductCard/ProductCard";
import "./HomePage.css";

export const HomePage = (props) => {
  const { setNumeroProductes, numeroProductes } = props;

  return (
    <main>
      <div>
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="elemento-portada d-flex align-items-end mb-3">
              <div className="d-flex align-items-center">
                <p>Tria la teva cistella</p>
              </div>
            </div>
          </div>
          <Link
            to="./sobre-nosaltres"
            className="col-md-4 col-sm-12 d-flex flex-column justify-content-between"
          >
            <div className="elemento-portada elemento-portada-small d-flex align-items-end mb-3">
              <div className="d-flex align-items-center">
                <p>Qui som</p>
              </div>
            </div>
            <div className="elemento-portada elemento-portada-small d-flex align-items-end mb-3">
              <div className="d-flex align-items-center">
                <p>Cerca activitats!</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <p className="text-gran mt-5">Productes destacats</p>
        <div className="product-list">
          <ProductCard
            setNumeroProductes={setNumeroProductes}
            numeroProductes={numeroProductes}
          />
          <ProductCard
            setNumeroProductes={setNumeroProductes}
            numeroProductes={numeroProductes}
          />
          <ProductCard
            setNumeroProductes={setNumeroProductes}
            numeroProductes={numeroProductes}
          />
          <ProductCard
            setNumeroProductes={setNumeroProductes}
            numeroProductes={numeroProductes}
          />
        </div>
      </div>
    </main>
  );
};
