import "./Header.css";
import logo from "../../assets/logotip-horitzontal.png";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBasket, FaUser, FaBars } from "react-icons/fa";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

export const Header = (props) => {
  const [Open, setOpen] = useState(false);
  const [magnifierOpen, setMagnifierOpen] = useState(false);
  const magnifier = !!magnifierOpen;
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
            <Hamburger
              className="hamburger-icon"
              toggled={Open}
              toggle={setOpen}
              direction="right"
              color="#151515"
              rounded
            />
          </button>
          <div className="col-6 col-md-4 col-lg-3 text-center">
            <Link to="./principal">
              <img className="logo" src={logo} alt="" />
            </Link>
          </div>
          <div className="input-search col-md-5 col-lg-4">
            <form className="form-search d-flex align-items-center justify-content-between">
              <div className="form-label-group input-search-bar">
                <input
                  type="text"
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
              <FaSearch
                className="magnifier-icon"
                onClick={() => setMagnifierOpen(!magnifierOpen)}
              />
              <Link className="col-2 icons-navbar" to="./iniciar-sessio">
                <FaUser />
              </Link>
              <Link
                className="col-2 icons-navbar icon-shopping-basket"
                to="./carro-compra"
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
                  to="./llista-productes"
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
      <div className="input-search-mobile d-flex justify-content-center align-items-center mb-2">
        {magnifierOpen && (
          <div className="input-search-mobile">
            <form className="form-search-mobile d-flex align-items-center justify-content-between">
              <div className="form-label-group input-search-bar">
                <input
                  type="text"
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
        )}
      </div>
      <div className="bar-container text-center row align-items-center justify-content-center">
        <div className="col">
          <ul className="categories-nav-list row justify-content-between align-items-center">
            <li className="dropdown col-4">
              <Link to="./llista-productes">
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
        <div className="mobile-text-bar col-12">
          <p>Productes ecològics i de proximitat</p>
        </div>
      </div>
    </>
  );
};
