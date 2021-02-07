
import data from './data';
function App() {
  return (<div className="grid-container">

    <header className="row">
      <div>
        <a className="brand" href="/">HOTI </a><a className="brand2">STORE</a>
      </div>
      <div>
        <a href="/cart">Carrito</a>
        <a href="/signin">Iniciar sesión</a>
      </div>

    </header>

  
    <main>
      <div>
        <div className="row center">
{data.products.map(product =>(


<div key={product._id} className="card">
  <a href={`/products/${product._id}`}>
  <img className="medium" src={product.image} alt={product.name} />
  </a>


  <div className="card-body">
              <a href="product.html">
                <h2>Conjunto minerva</h2>
              </a>
              <div className="rating">
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                </div>
              <div className="price">S/{product.price}</div>
            </div>
          </div>
      )) 
}

          
        </div>
      </div>
    </main>
   
    <footer className="row center"> Todos los derechos reservados</footer>

  </div>
  );
}
export default App;
