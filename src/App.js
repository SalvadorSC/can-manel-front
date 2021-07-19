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

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container section">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/principal" />
            </Route>
            <Route path="/principal" exact>
              <HomePage />
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
              <ProductList />
            </Route>
            <Route path="/llista-cistelles" exact>
              <BasketList />
            </Route>
            <Route path="/carro-compra" exact>
              <ShoppingBasket />
            </Route>
            <Route path="/administracio" exact>
              <AdminHomePage />
            </Route>
            <Route path="**">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
