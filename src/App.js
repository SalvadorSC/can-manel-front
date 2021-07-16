import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { Cabecera } from "./componentes/Cabecera/Cabecera";
import { useState, useEffect } from "react";
import { PaginaPrincipal } from "./paginas/paginaPrincipal/PaginaPrincipal";
import { PaginaNotFound } from "./paginas/PaginaNotFound";
import { Login } from "./paginas/login/Login";
import { Register } from "./paginas/register/Register";
import { ProductList } from "./paginas/productList/ProductList";
import { ShoppingBasket } from "./paginas/shoppingBasket/ShoppingBasket";

function App() {
  return (
    <>
      <Router>
        <Cabecera />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/principal" />
            </Route>
            <Route path="/principal" exact>
              <PaginaPrincipal />
            </Route>
            <Route path="/iniciar-sesion" exact>
              <Login />
            </Route>
            <Route path="/registro" exact>
              <Register />
            </Route>
            <Route path="/product-list" exact>
              <ProductList />
            </Route>
            <Route path="/Listado" exact>
              <ShoppingBasket />
            </Route>
            <Route path="**">
              <PaginaNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
