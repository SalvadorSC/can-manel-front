import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { Cabecera } from "./componentes/Cabecera";
import { useState, useEffect } from "react";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";
import { Login } from "./paginas/login/Login";
import { ProductList } from "./paginas/productList/ProductList";

function App() {
  return (
    <>
      <Router>
        <Cabecera />
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
          <Route path="/product-list" exact>
            <ProductList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
