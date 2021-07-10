import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { Cabecera } from "./componentes/Cabecera";
import { useState, useEffect } from "react";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";
import { Login } from "./paginas/Login";

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
