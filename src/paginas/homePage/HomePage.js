import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FeaturedProducts } from "../../componentes/FeaturedProducts/FeaturedProducts";
import "./HomePage.css";

export const HomePage = (props) => {
  const { setNumeroProductes, numeroProductes, products } = props;

  return (
    <main>
      <div>
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <Link
              to="./llista-cistelles"
              className="homepage-element d-flex align-items-end mb-3"
            >
              <div className="d-flex align-items-center">
                <p>Tria la teva cistella</p>
              </div>
            </Link>
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
      <FeaturedProducts
        setNumeroProductes={setNumeroProductes}
        numeroProductes={numeroProductes}
        products={products}
      />
    </main>
  );
};

HomePage.propTypes = {
  products: PropTypes.array.isRequired,
};
