import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Product from "./componentes/Product";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";
/*3:16:15 Tenemos un error state.cartItems.find is not a function*/
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              HOTI{" "}
            </Link>
            <a className="brand2">STORE</a>
          </div>
          <div>
            <Link to="/cart">
              Carrito
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Iniciar sesión</Link>
          </div>
        </header>

        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        <footer className="row center"> Todos los derechos reservados</footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
