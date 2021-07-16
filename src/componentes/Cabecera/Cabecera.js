import "./Cabecera.css";
import logo from "../../assets/logotip-horitzontal.png";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBasket, FaUser } from "react-icons/fa";

export const Cabecera = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="top-navbar row justify-content-between align-items-center mt-3 mb-4">
          <ul className="col-4 d-flex justify-content-center align-items-center">
            <li className="mr-4">
              <a href="holalog">Chat with us</a>
            </li>
            <li className="mr-4">
              <a href="holalog">+34 662 21 62 97</a>
            </li>
            <li>
              <a href="holalog">info@canmanel.com</a>
            </li>
          </ul>
          <ul className="col-4 d-flex justify-content-center align-items-center">
            <li>
              <a href="holalog">Blog</a>
            </li>
            <li className="ml-5">
              <a href="holalog">Sobre nosaltres</a>
            </li>
            <li className="ml-5">
              <a href="holalog">Activitats</a>
            </li>
          </ul>
        </div>
        <div className="row justify-content-between align-items-center my-4 navbar-light">
          <button
            className="col navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo"
            aria-controls="navbarTogglerDemo"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="col-7 col-md-4 col-lg-3 text-center">
            <Link to="./principal">
              <img className="logo" src={logo} alt="" />
            </Link>
          </div>
          <div className="input-search col-md-5 col-lg-4">
            <form className="form-search d-flex align-items-center justify-content-between">
              <div className="form-label-group input-search-bar">
                <input
                  type="email"
                  id=""
                  className="form-control"
                  placeholder="Buscar Productes, categories..."
                  required=""
                  autoFocus=""
                />
              </div>
              <button className="btn" type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
          <div className="col-3 col-md-2 col-lg-2">
            <div className="row align-items-center justify-content-center">
              <FaSearch className="magnifier-icon" />
              <Link className="col-2 icons-navbar" to="./iniciar-sesion">
                <FaUser />
              </Link>
              <Link
                className="col-2 icons-navbar icon-shopping-basket"
                to="./shoppingBasket"
              >
                <FaShoppingBasket />
              </Link>
            </div>
          </div>
          <div
            className="links-nav col-12 collapse navbar-collapse"
            id="navbarTogglerDemo"
          >
            <ul className="row navbar-nav mr-auto mb-3 mt-lg-0 text-left">
              <li className="col-12 col-lg-2 nav-item">
                <Link
                  to="./product-list"
                  className="drop-down-link nav-link"
                  href="links"
                >
                  Fruites i verdures <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="col-12 col-lg-2 nav-item">
                <a className="drop-down-link nav-link" href="links">
                  Cistelles
                </a>
              </li>
              <li className="col-12 col-lg-2 nav-item">
                <a className="drop-down-link nav-link" href="links">
                  Sobre nosaltres
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bar-container text-center row align-items-center justify-content-center">
        <div className="col">
          <ul className="categories-nav-list row justify-content-between align-items-center">
            <li className="dropdown col-4">
              <Link to="./product-list">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  // data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Fruites i verdures
                </button>
              </Link>
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
            <li className="dropdown col-4">
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
            <li className="dropdown col-4">
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
        </div>
        <p className="mobile-text-bar col">
          Productes ecològics i de proximitat
        </p>
      </div>

      {/* <div className="container-fluid">
        <div className="top-navbar row justify-content-between align-items-center mt-3 mb-4">
          <div className="col-5">
            <ul className="row justify-content-center align-items-center">
              <li className="col-4">
                <a href="holalog" className="mr-4">
                  Chat with us
                </a>
              </li>
              <li className="col-4">
                <a href="holalog" className="mr-4">
                  +34 662 21 62 97
                </a>
              </li>
              <li className="col-4">
                <a href="holalog" className="mr-4">
                  info@canmanel.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <ul className="row justify-content-center align-items-center">
              <li className="col-4">
                <a href="holalog" className="mr-4">
                  Blog
                </a>
              </li>
              <li className="col-4">
                <a href="holalog" className="mr-4">
                  About Us
                </a>
              </li>
              <li className="col-4">
                <a href="holalog" className="mr-4">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-between align-items-center navbar-expand-lg my-4 navbar-light">
          <button
            className="col navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo"
            aria-controls="navbarTogglerDemo"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="col-7 col-lg-4 text-center">
            <Link to="./principal">
              <img className="logo" src={logo} alt="Logo de Can Mateu" />
            </Link>
          </div>
          <div className="input-search col-4">
            <form className="form-search d-flex align-items-center justify-content-between">
              <div className="form-label-group ">
                <select className="form-control">
                  <option defaultValue>All Categories</option>
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
                  placeholder="Buscar Productes, categories..."
                  required=""
                  autoFocus=""
                />
              </div>
              <button className="btn" type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
          <div className="col-3 col-lg-3">
            <div className="row align-items-center justify-content-center">
              <Link className="col-2 icons-navbar" to="./iniciar-sesion">
                <FaUser />
              </Link>
              <Link
                className="col-2 icons-navbar icon-shopping-basket"
                to="./shoppingBasket"
              >
                <FaShoppingBasket />
              </Link>
            </div>
          </div>
          <div
            className="links-nav col-12 collapse navbar-collapse"
            id="navbarTogglerDemo"
          >
            <ul className="row navbar-nav mr-auto mb-3 mt-lg-0 text-left">
              <li className="col-12 col-lg-2 nav-item">
                <a className="drop-down-link nav-link" href="links">
                  Fruites i verdures <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="col-12 col-lg-2 nav-item">
                <a className="drop-down-link nav-link" href="links">
                  Cistelles
                </a>
              </li>
              <li className="col-12 col-lg-2 nav-item">
                <a className="drop-down-link nav-link" href="links">
                  Sobre nosaltres
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bar-container text-center d-flex align-items-center justify-content-center">
        <p className="mobile-text-bar">Productes ecològics i de proximitat</p>
      </div> */}

      {/* <header className="container-fluid cabecera pt-3">
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-around">
            <Link to="./principal">
              <img className="logo" src={logo} alt="" />
            </Link>
            <div className="input-search">
              <form className="form-search d-flex align-items-center justify-content-between">
                <div className="form-label-group ">
                  <select className="form-control">
                    <option defaultValue>All Categories</option>
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
            </div>
            <div>
              <Link to="./iniciar-sesion">
                <FaUser className="mr-3" />
              </Link>
              <FaShoppingBasket />
            </div>
          </div>
        </div>
        <ul className="pl-0 row px-5 d-flex justify-content-around categories-nav-list">
          <li className="dropdown">
            <Link to="./product-list">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                // data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Fruites i verdures
              </button>
            </Link>
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
      </header> */}
    </>
  );
};
