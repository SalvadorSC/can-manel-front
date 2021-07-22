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
import { AddedToCartMessage } from "./componentes/AddedToCartMessage/AddedToCartMessage";

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
        <Header setNProducts={setNProducts} nProducts={nProducts} />
        {/* {showAddedToCartMessage &&
          messages.map((message) => <AddedToCartMessage message={message} />)} */}
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
            <Route path="/iniciar-sessio" exact>
              <Login />
            </Route>
            <Route path="/perfil" exact>
              <UserProfile />
            </Route>
            <Route path="/registre" exact>
              <Register />
            </Route>
            <Route path="/llista-productes" exact>
              <ProductList
                setNProducts={setNProducts}
                nProducts={nProducts}
                products={products}
              />
            </Route>
            <Route path="/producte" exact>
              <PaginaProducte
                setNProducts={setNProducts}
                nProducts={nProducts}
                products={products}
              />
            </Route>
            <Route path="/llista-cistelles" exact>
              <BasketList setNProducts={setNProducts} nProducts={nProducts} />
            </Route>
            <Route path="/carro-compra" exact>
              <ShoppingBasket products={products} />
            </Route>
            <Route path="/administracio" exact>
              <AdminHomePage />
            </Route>
            <Route path="/sobre-nosaltres" exact>
              <AboutUs />
            </Route>
            <Route path="/administracio-productes" exact>
              <AdminProductList
                products={products}
                setProducts={setProducts}
                fetchGlobal={fetchGlobal}
                urlAPI={urlAPI}
              />
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
      </Router>
    </>
  );
}

export default App;
