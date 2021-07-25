import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { Header } from "./componentes/Header/Header";
import { HomePage } from "./paginas/homePage/HomePage";
import { PageNotFound } from "./paginas/pageNotFound/PageNotFound";
import { Login } from "./paginas/login/Login";
import { Register } from "./paginas/register/Register";
import { ProductList } from "./paginas/productList/ProductList";
import { ShoppingBasket } from "./paginas/shoppingBasket/ShoppingBasket";
import { UserProfile } from "./paginas/userProfile/UserProfile";
import { AdminHomePage } from "./paginas/adminHomePage/AdminHomePage";
import { BasketList } from "./paginas/basketList/BasketList";
import { HistorialCompra } from "./paginas/historialCompra/HistorialCompra";
import { AboutUs } from "./paginas/aboutUs/AboutUs";
import { useCallback, useContext, useEffect, useState } from "react";
import { AdminProductList } from "./paginas/adminProductList/AdminProductList";
import { Footer } from "./componentes/Footer/Footer";
import { useFetch } from "./hooks/useFetch";
import { PaginaProducte } from "./paginas/paginaProducte/PaginaProducte";
import { PaginaBasket } from "./paginas/paginaBasket/PaginaBasket";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { CartContextProvider } from "./context/CartContextProvider";
import { ProtectedRoute } from "./componentes/ProtectedRoute/ProtectedRoute";
import { LogOut } from "./componentes/LogOut/LogOut";
import { ScrollToTop } from "./componentes/ScrollToTop/ScrollToTop";
import { AuthContext } from "./context/AuthContext";

function App() {
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal } = useFetch(urlAPI);
  const [shoppingCart, setShoppingCart] = useState({});
  const [productsInCart, setProductsInCart] = useState(0);
  const token = localStorage.getItem("token");

  const userShoppingCart = useCallback(async () => {
    const shoppingCart = await fetchGlobal(
      `${urlAPI}shopping-carts/my-shopping-cart`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (shoppingCart) {
      setShoppingCart(shoppingCart);
      setProductsInCart(shoppingCart.products.length);
    }
  }, [fetchGlobal, token, urlAPI]);

  const myShoppingCart = useCallback(async () => {
    const shoppingCartId = localStorage.getItem("shoppingCartId");
    const shoppingCart = await fetchGlobal(
      `${urlAPI}shopping-carts/shopping-cart/${shoppingCartId}`
    );
    if (shoppingCart) {
      setShoppingCart(shoppingCart);
      setProductsInCart(shoppingCart.products.length);
    }
  }, [fetchGlobal, urlAPI]);

  const newShoppingCart = useCallback(async () => {
    const shoppingCartAPI = await fetchGlobal(
      `${urlAPI}shopping-carts/new-shopping-cart`,
      {
        method: "POST",
      }
    );
    if (shoppingCartAPI) {
      localStorage.setItem("shoppingCartId", shoppingCartAPI._id);
      setShoppingCart(shoppingCartAPI);
      setProductsInCart(shoppingCartAPI.products.length);
    }
  }, [fetchGlobal, urlAPI]);

  useEffect(() => {
    if (localStorage.getItem("shoppingCartId")) {
      myShoppingCart();
    } else if (token) {
      localStorage.removeItem("shoppingCartId");
      userShoppingCart();
    } else {
      newShoppingCart();
    }
  }, [myShoppingCart, newShoppingCart, token, userShoppingCart]);

  return (
    <>
      <Router>
        <ScrollToTop />
        <AuthContextProvider>
          <CartContextProvider>
            <Header productsInCart={productsInCart} />
            <div className="container section">
              <Switch>
                <Route path="/" exact>
                  <Redirect to="/principal" />
                </Route>
                <Route path="/principal" exact>
                  <HomePage />
                </Route>
                <Route path="/sobre-nosaltres" exact>
                  <AboutUs />
                </Route>
                <Route path="/iniciar-sessio" exact>
                  <Login fetchGlobal={fetchGlobal} />
                </Route>
                <Route path="/tancar-sessio" exact>
                  <LogOut />
                </Route>
                <Route path="/perfil" exact>
                  <UserProfile />
                </Route>
                <Route path="/registre" exact>
                  <Register fetchGlobal={fetchGlobal} />
                </Route>
                <Route path="/llista-productes" exact>
                  <ProductList
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    setProductsInCart={setProductsInCart}
                  />
                </Route>
                <Route path="/producte/:id" exact>
                  <PaginaProducte
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    setProductsInCart={setProductsInCart}
                  />
                </Route>
                <Route path="/cistella/:id" exact>
                  <PaginaBasket
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    setProductsInCart={setProductsInCart}
                  />
                </Route>
                <Route path="/llista-cistelles" exact>
                  <BasketList
                    fetchGlobal={fetchGlobal}
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    setProductsInCart={setProductsInCart}
                  />
                </Route>
                <Route path="/carro-compra" exact>
                  <ShoppingBasket
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                  />
                </Route>
                <Route path="/administracio" exact>
                  <ProtectedRoute>
                    <AdminHomePage />
                  </ProtectedRoute>
                </Route>
                <Route path="/administracio-productes" exact>
                  <ProtectedRoute>
                    <AdminProductList fetchGlobal={fetchGlobal} />
                  </ProtectedRoute>
                </Route>
                <Route path="/sobre-nosaltres" exact>
                  <AboutUs />
                </Route>
                <Route path="/iniciar-sessio" exact>
                  <Login fetchGlobal={fetchGlobal} />
                </Route>
                <Route path="/tancar-sessio" exact>
                  <Login />
                </Route>
                <Route path="/perfil" exact>
                  <UserProfile />
                </Route>
                <Route path="/registre" exact>
                  <Register fetchGlobal={fetchGlobal} />
                </Route>
                <Route path="/llista-productes" exact>
                  <ProductList
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    setProductsInCart={setProductsInCart}
                  />
                </Route>
                <Route path="/producte/:id" exact>
                  <PaginaProducte
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    setProductsInCart={setProductsInCart}
                  />
                </Route>
                <Route path="/cistella/:id" exact>
                  <PaginaBasket
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    setProductsInCart={setProductsInCart}
                  />
                </Route>
                <Route path="/llista-cistelles" exact>
                  <BasketList
                    fetchGlobal={fetchGlobal}
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    setProductsInCart={setProductsInCart}
                  />
                </Route>
                <Route path="/carro-compra" exact>
                  <ShoppingBasket
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                  />
                </Route>
                <Route path="/administracio" exact>
                  <ProtectedRoute>
                    <AdminHomePage />
                  </ProtectedRoute>
                </Route>
                <Route path="/administracio-productes" exact>
                  <ProtectedRoute>
                    <AdminProductList fetchGlobal={fetchGlobal} />
                  </ProtectedRoute>
                </Route>
                <Route path="/historial-compra" exact>
                  <HistorialCompra />
                </Route>
                <Route path="**">
                  <PageNotFound />
                </Route>
              </Switch>
            </div>
            <Footer />
          </CartContextProvider>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
