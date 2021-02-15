import React from "react";
import { Link } from "react-router-dom";
import Rating from "../componentes/Rating";
import data from "../data";

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div>
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Precio : S/{product.price}</li>
            <li>
              Descripción:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Precio</div>
                  <div className="price">S/{product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Estado</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">Disponible</span>
                    ) : (
                      <span className="danger">Agotado</span>
                    )}
                  </div>
                </div>
              </li>

              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}