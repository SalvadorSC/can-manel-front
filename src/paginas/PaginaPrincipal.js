import { useFetch } from "../hooks/useFetch";

import { FaStar, FaArrowRight, FaChevronRight } from "react-icons/fa";

export const PaginaPrincipal = () => {
  return (
    <>
      <ul className="pl-0 row list-unstyled px-5 d-flex justify-content-around categories-nav-list">
        <li className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            /* data-toggle="dropdown" */
            aria-haspopup="true"
            aria-expanded="false"
          >
            Fruites i verdures
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button">
              Action
            </button>
            <button className="dropdown-item" type="button">
              Another action
            </button>
            <button className="dropdown-item" type="button">
              Something else here
            </button>
          </div>
        </li>
        <li className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Cistelles
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button">
              Action
            </button>
            <button className="dropdown-item" type="button">
              Another action
            </button>
            <button className="dropdown-item" type="button">
              Something else here
            </button>
          </div>
        </li>
        <li className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Nutrition
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button">
              Action
            </button>
            <button className="dropdown-item" type="button">
              Another action
            </button>
            <button className="dropdown-item" type="button">
              Something else here
            </button>
          </div>
        </li>
      </ul>

      {/*  <div>
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
