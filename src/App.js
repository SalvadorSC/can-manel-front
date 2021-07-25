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
import { useCallback, useEffect, useState } from "react";
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

function App() {
  const [nProducts, setNProducts] = useState(0);
  const [products, setProducts] = useState([]);
  const urlAPI = process.env.REACT_APP_URL_API;
  const { fetchGlobal } = useFetch(urlAPI);

  const loadProducts = useCallback(async () => {
    const productsAPI = await fetchGlobal(`${urlAPI}products/list`);
    if (productsAPI) {
      setProducts(productsAPI);
    }
  }, [fetchGlobal, urlAPI]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <>
      <Router>
        <ScrollToTop />
        <AuthContextProvider>
          <CartContextProvider>
            <Header setNProducts={setNProducts} nProducts={nProducts} />
            <div className="container section">
              <Switch>
                <Route path="/" exact>
                  <Redirect to="/principal" />
                </Route>
                <Route path="/principal" exact>
                  <HomePage
                    setNProducts={setNProducts}
                    nProducts={nProducts}
                    products={products}
                  />
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
                    setNProducts={setNProducts}
                    nProducts={nProducts}
                    products={products}
                  />
                </Route>
                <Route path="/producte/:id" exact>
                  <PaginaProducte
                    setNProducts={setNProducts}
                    nProducts={nProducts}
                    products={products}
                  />
                </Route>
                <Route path="/cistella/:id" exact>
                  <PaginaBasket
                    setNProducts={setNProducts}
                    nProducts={nProducts}
                    products={products}
                  />
                </Route>
                <Route path="/llista-cistelles" exact>
                  <BasketList
                    fetchGlobal={fetchGlobal}
                    setNProducts={setNProducts}
                    nProducts={nProducts}
                  />
                </Route>
                <Route path="/carro-compra" exact>
                  <ShoppingBasket products={products} />
                </Route>
                <Route path="/administracio" exact>
                  <ProtectedRoute>
                    <AdminHomePage />
                  </ProtectedRoute>
                </Route>
                <Route path="/administracio-productes" exact>
                  <ProtectedRoute>
                    <AdminProductList
                      products={products}
                      setProducts={setProducts}
                      fetchGlobal={fetchGlobal}
                    />
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
                    setNProducts={setNProducts}
                    nProducts={nProducts}
                    products={products}
                  />
                </Route>
                <Route path="/producte/:id" exact>
                  <PaginaProducte
                    setNProducts={setNProducts}
                    nProducts={nProducts}
                    products={products}
                  />
                </Route>
                <Route path="/cistella/:id" exact>
                  <PaginaBasket
                    setNProducts={setNProducts}
                    nProducts={nProducts}
                    products={products}
                  />
                </Route>
                <Route path="/llista-cistelles" exact>
                  <BasketList
                    fetchGlobal={fetchGlobal}
                    setNProducts={setNProducts}
                    nProducts={nProducts}
                  />
                </Route>
                <Route path="/carro-compra" exact>
                  <ShoppingBasket
                    products={products}
                    setNProducts={setNProducts}
                    nProducts={nProducts}
                  />
                </Route>
                <Route path="/administracio" exact>
                  <ProtectedRoute>
                    <AdminHomePage />
                  </ProtectedRoute>
                </Route>
                <Route path="/administracio-productes" exact>
                  <ProtectedRoute>
                    <AdminProductList
                      products={products}
                      setProducts={setProducts}
                      fetchGlobal={fetchGlobal}
                    />
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
