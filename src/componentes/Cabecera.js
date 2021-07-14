import "./Cabecera.css";
import Logo from "../assets/logotip-horitzontal.png";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBasket, FaUser } from "react-icons/fa";

export const Cabecera = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center navbar-expand-lg my-4 navbar-light">
          <button
            className="col-2 navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="./principal">
            <img className="logo col" src={Logo} alt="" />
          </Link>
          <div className="col-2">
            <div className="row align-items-center">
              <Link to="./iniciar-sesion">
                <FaUser className="icons-navbar mr-3" />
              </Link>
              <FaShoppingBasket className="icons-navbar icon-shopping-basket" />
            </div>
          </div>
        </div>

        <div
          className="col-12 collapse navbar-collapse"
          id="navbarTogglerDemo03"
        >
          <ul className="row navbar-nav mr-auto mb-3 mt-lg-0 text-left">
            <li className="col-12 nav-item">
              <a className="drop-down-link nav-link" href="#">
                Fruites i verdures <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="col-12 nav-item">
              <a className="drop-down-link nav-link" href="#">
                Cistelles
              </a>
            </li>
            <li className="col-12 nav-item">
              <a className="drop-down-link nav-link" href="#">
                Sobre nosaltres
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bar-container text-center d-flex align-items-center justify-content-center">
        <p className="mobile-text-bar">Productes ecològics i de proximitat</p>
      </div>
      {/*  <header className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <nav className="col-3 navbar navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="holaome">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="holaeatures">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="holaricing">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="col text-center">
            <Link to="./principal">
              <img className="logo" src={Logo} alt="" />
            </Link>
          </div>
          <div className="col-3">
            <div className="row align-items-center justify-content-center">
              <Link to="./iniciar-sesion">
                <FaUser className="icons-navbar mr-3" />
              </Link>
              <FaShoppingBasket className="icons-navbar icon-shopping-basket" />
            </div>
          </div>
        </div>
      </header>
 */}

      {/* ------------------------------------------------------------------------------------ */}
      {/* <header className="container-fluid cabecera pt-3">
        <div className="mb-5">
          <nav className="top-navbar w-100 px-5 ">
            <ul className="d-flex justify-content-between align-items-center pl-0">
              <div className="d-flex">
                <li>
                  <a href="holalog" className="mr-4">
                    Chat with us
                  </a>
                </li>
                <li>
                  <a href="holalog" className="mr-4">
                    +34 662 21 62 97
                  </a>
                </li>
                <li>
                  <a href="holalog" className="mr-4">
                    info@canmanel.com
                  </a>
                </li>
              </div>

              <div className="d-flex">
                <li>
                  <a href="holalog" className="mr-4">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="holalog" className="mr-4">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="holalog" className="mr-4">
                    Careers
                  </a>
                </li>
              </div>
            </ul>
          </nav>
          <hr />
          <div className="d-flex align-items-center justify-content-around">
            <Link to="./principal">
              <img className="logo" src={Logo} alt="" />
            </Link>
            <div className="input-search">
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
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              /* data-toggle="dropdown" */
      /*  aria-haspopup="true"
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
      </header> */}
    </>
  );
};
