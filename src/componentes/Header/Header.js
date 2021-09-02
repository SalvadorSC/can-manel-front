import "./Header.css";
import logo from "../../assets/logo.svg";
import { Link, NavLink, useHistory } from "react-router-dom";
import { FaSearch, FaShoppingBasket, FaUser, FaBars } from "react-icons/fa";
import { Fade as Hamburger } from "hamburger-react";
import { useCallback, useContext, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { AuthContext } from "../../context/AuthContext";

export const Header = (props) => {
  const { productsInCart, setShoppingCart } = props;

  const [open, setOpen] = useState(false);
  const [magnifierOpen, setMagnifierOpen] = useState(false);
  const nodeRef = useRef(null);
  const [showBusquedas, setShowBusquedas] = useState(false);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const toggleHamburger = () => {
    setOpen(!open);
  };
  const logOut = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setShoppingCart({
      _id: "",
      price: 0,
      products: [],
    });
    setLoggedIn(false);
    history.push("./principal");
  }, [history, setLoggedIn, setShoppingCart]);

  const busquedas = (
    <>
      <div className="search-results">
        <p>Resultado 1</p>
        <hr />
        <p>Resultado 2</p>
        <hr />
        <p>Resultado 3</p>
        <hr />
        <p>Resultado 4</p>
        <hr />
        <p>Resultado 5</p>
        <hr />
        <p>Resultado 6</p>
        <hr />
        <p>Resultado 7</p>
      </div>
    </>
  );

  const mostrarBusquedas = (e) => {
    if (e.target.value !== "") {
      setShowBusquedas(true);
    } else {
      setShowBusquedas(false);
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="top-navbar row justify-content-between align-items-center">
            <ul className="col-5 d-flex justify-content-center align-items-center my-0">
              <li className="mr-4">
                <a href="./holalog">Contacta'ns</a>
              </li>
              <li className="mr-4">
                <a href="holalog">+34 662 21 62 97</a>
              </li>
              <li>
                <a href="./holalog">info@canmateu.com</a>
              </li>
            </ul>
            <ul className="col-4 d-flex justify-content-center align-items-center my-0">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li className="ml-5">
                <Link to="/sobre-nosaltres">Sobre nosaltres</Link>
              </li>
              <li className="ml-5">
                <Link to="/activitats">Activitats</Link>
              </li>
            </ul>
          </div>
          <div className="row justify-content-between align-items-center navbar-light">
            <button
              className="col-2 col-sm-2 navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo"
              aria-controls="navbarTogglerDemo"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Hamburger
                className="hamburger-icon"
                toggled={open}
                toggle={setOpen}
                direction="right"
                color="#151515"
                rounded
              />
            </button>
            <div className="container-logo col-7 col-sm-5 col-md-4 col-lg-4 text-sm-left">
              <Link to="/principal">
                <img className="logo" src={logo} alt="" />
              </Link>
            </div>
            <div className="input-search col-md-5 col-lg-5">
              <form className="form-search d-flex align-items-center justify-content-between">
                <div className="form-label-group input-search-bar">
                  <input
                    type="text"
                    id=""
                    className="form-control input-search-input"
                    placeholder="Buscar productes, categories..."
                    required=""
                    autoFocus=""
                    onChange={(e) => mostrarBusquedas(e)}
                  />
                </div>
                <button className="btn" type="submit">
                  <FaSearch />
                </button>
              </form>
              {showBusquedas && busquedas}
            </div>
            <div className="col-3 col-sm-5 col-md-3 col-lg-3 text-center text-sm-right">
              <div className="d-flex align-items-center justify-content-end">
                <Link className="icons-navbar" to="">
                  <FaSearch
                    className="magnifier-icon"
                    onClick={() => setMagnifierOpen(!magnifierOpen)}
                  />
                </Link>
                {loggedIn && (
                  <button
                    type="button"
                    onClick={logOut}
                    className="logout-header mr-3 btn"
                  >
                    TANCAR SESSIÓ
                  </button>
                )}
                <Link
                  className="icons-navbar icon-user "
                  to={!loggedIn ? "/iniciar-sessio" : "/perfil"}
                >
                  <FaUser />
                </Link>
                <Link
                  className="icons-navbar icon-shopping-basket"
                  to="/carro-compra"
                >
                  <div className="d-flex">
                    <FaShoppingBasket />
                    {productsInCart >= 0 && (
                      <div className="numero-productes">{productsInCart}</div>
                    )}
                  </div>
                </Link>
              </div>
            </div>
            <CSSTransition
              in={open}
              nodeRef={nodeRef}
              timeout={300}
              classNames="navbar"
            >
              <div
                ref={nodeRef}
                className={`${
                  open ? "open-navbar " : "close-navbar "
                }links-nav col-12`}
                id="navbarTogglerDemo"
              >
                <ul className="row mr-auto navbar-nav mb-3 mt-lg-0 text-left">
                  <li className="col-12 col-lg-2 nav-item">
                    <Link
                      to="/llista-productes"
                      className="drop-down-link nav-link"
                      onClick={() => toggleHamburger()}
                    >
                      Fruites i verdures
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="col-12 col-lg-2 nav-item">
                    <Link
                      to="/llista-cistelles"
                      className="drop-down-link nav-link"
                      onClick={() => toggleHamburger()}
                    >
                      Cistelles
                    </Link>
                  </li>
                  <li className="col-12 col-lg-2 nav-item">
                    <Link
                      to="./sobre-nosaltres"
                      className="drop-down-link nav-link"
                      onClick={() => toggleHamburger()}
                    >
                      Sobre nosaltres
                    </Link>
                  </li>
                  <li className="col-12 col-lg-2 nav-item">
                    {loggedIn ? (
                      <button
                        type="button"
                        className="logout-hamburger-menu drop-down-link nav-link btn"
                        onClick={() => {
                          toggleHamburger();
                          logOut();
                        }}
                        to=""
                      >
                        Tancar sessió
                      </button>
                    ) : (
                      <Link
                        to="/iniciar-sessio"
                        className="drop-down-link nav-link"
                        onClick={() => toggleHamburger()}
                      >
                        Iniciar Sessió
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </CSSTransition>
          </div>
          {magnifierOpen && (
            <div className="input-search-mobile row d-flex justify-content-center align-items-center">
              <form className="form-search-mobile col-10 d-flex align-items-center justify-content-between">
                <div className="form-label-group input-search-bar">
                  <input
                    type="text"
                    id=""
                    className="form-control"
                    placeholder="Buscar productes, categories..."
                    required=""
                    autoFocus=""
                  />
                </div>
                <button className="btn" type="button">
                  <FaSearch />
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="container-fluid">
          <div className="bar-container text-center row align-items-center justify-content-center">
            <div className="col">
              <ul className="categories-nav-list row justify-content-between align-items-center mb-0">
                <li className="dropdown col-4">
                  <NavLink to="/llista-productes" activeClassName="actual">
                    Fruites i verdures
                  </NavLink>
                </li>
                <li className="dropdown col-4">
                  <NavLink to="/llista-cistelles" activeClassName="actual">
                    Cistelles
                  </NavLink>
                </li>
                <li className="dropdown col-4">
                  <NavLink to="/sobre-nosaltres" activeClassName="actual">
                    Qui som
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="mobile-text-bar col-12">
              <p>Productes ecològics i de proximitat</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
