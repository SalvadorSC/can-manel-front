import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { Cabecera } from "./componentes/Cabecera";
import { useState, useEffect } from "react";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
