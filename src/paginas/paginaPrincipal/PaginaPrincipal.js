import { FaStar, FaArrowRight, FaChevronRight } from "react-icons/fa";
import "./PaginaPrincipal.css";

export const PaginaPrincipal = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="elemento-portada d-flex align-items-end mb-3">
              <div className="d-flex align-items-center">
                <p>Tria la teva cistella</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex flex-column justify-content-between">
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
          </div>
        </div>
      </div>
      {/* <div>
        <nav className="pl-5 mt-5">
          <p className="item-list-title mb-2">Category Menu</p>
          <ul className="list-unstyled item-list">
            <li className="item-name mb-2">Bakery</li>
            <li className="item-name mb-2">Fruit and vegetables</li>
            <li className="item-name mb-2">Meat and fish</li>
            <li className="item-name mb-2">Drinks</li>
            <li className="item-name mb-2">Nutrition</li>
          </ul>

          <button className="btn btn-md btn-secondary mt-5 font-weight-bold">
            More categories <FaChevronRight />
          </button>
        </nav>
      </div> */}
    </>
  );
};
