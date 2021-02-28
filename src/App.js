import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";

const isLogged = false;

const PrivateRoute = ({ children, ...rest }) => {
  console.log({ ...rest });
  return (
    <Route {...rest}>{isLogged ? children : <Redirect to="/login" />}</Route>
  );
};

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Meu site Legal</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </header>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/sobre">
          <Sobre />
        </PrivateRoute>

        <Route path="*">
          <h1>Page Not Found</h1>
        </Route>
      </Switch>

      <hr />

      <footer>Todos os direitos reservados.</footer>
    </BrowserRouter>
  );
}

export default App;
