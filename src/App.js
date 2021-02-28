import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

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
        <Route exact path="/sobre">
          <Sobre />
        </Route>
      </Switch>

      <hr />

      <footer>Todos os direitos reservados.</footer>
    </BrowserRouter>
  );
}

export default App;
