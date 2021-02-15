import { BrowserRouter, Route } from "react-router-dom";
import Homescreen from "./screens/HomeScreen";
import Productscreen from "./screens/ProductScreen";
import Product from "./componentes/Product";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              HOTI{" "}
            </a>
            <a className="brand2">STORE</a>
          </div>
          <div>
            <a href="/cart">Carrito</a>
            <a href="/signin">Iniciar sesión</a>
          </div>
        </header>

        <main>
          <Route path="/product/:id" component={Productscreen}></Route>
          <Route path="/" component={Homescreen} exact></Route>
        </main>

        <footer className="row center"> Todos los derechos reservados</footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
