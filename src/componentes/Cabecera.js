import "./Cabecera.css";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBasket, FaUser } from "react-icons/fa";

export const Cabecera = (props) => {
  return (
    <>
      <header className="cabecera pt-3">
        <div className="mb-5">
          <nav className=" w-100 px-5 ">
            <ul className="d-flex justify-content-between align-items-center list-unstyled pl-0">
              <div className="d-flex">
                <li>
                  <a href="blog" className="mr-4">
                    Chat with us
                  </a>
                </li>
                <li>
                  <a href="blog" className="mr-4">
                    +34 662 21 62 97
                  </a>
                </li>
                <li>
                  <a href="blog" className="mr-4">
                    info@canmanel.com
                  </a>
                </li>
              </div>

              <div className="d-flex">
                <li>
                  <a href="blog" className="mr-4">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="blog" className="mr-4">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="blog" className="mr-4">
                    Careers
                  </a>
                </li>
              </div>
            </ul>
          </nav>
          <hr />
          <div className="d-flex align-items-center justify-content-around">
            <Link to="./principal">
              <img src="https://via.placeholder.com/150x50" alt="" />
            </Link>
            <form className="form-search d-flex align-items-center justify-content-between">
              <div className="form-label-group ">
                <select className="form-control">
                  <option selected>All Categories</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="form-label-group input-search-bar">
                <input
                  type="email"
                  id=""
                  className="form-control"
                  placeholder="Search Products, categories,..."
                  required=""
                  autoFocus=""
                />
              </div>
              <button className="btn" type="submit">
                <FaSearch />
              </button>
            </form>
            <div>
              <Link to="./iniciar-sesion">
                <FaUser className="mr-3" />
              </Link>
              <FaShoppingBasket />
            </div>
          </div>
        </div>
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
      </header>
    </>
  );
};
