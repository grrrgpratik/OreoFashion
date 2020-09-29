import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";

const Card = ({
  product,
  showViewProductButton = true,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  //function (f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);

  // const [count, setCount] = useState(product.count);

  const cardTitle = product ? product.name : "A photo from pexels";
  // const cardDescription = product ? product.description : "Description";
  const cardPrice = product ? product.price : "DEFAULT";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };
  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={() => {
            addToCart();
          }}
          className="btn btn-outline-success mt-2 mb-2  card-btn-1"
        >
          Add to Cart
        </button>
      )
    );
  };
  const showRemoveToCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock </span>
    );
  };

  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
            View Product
          </button>
        </Link>
      )
    );
  };
  return (
    <div className="card">
      {/* <div className="card-header card-header-1 text-dark">{cardTitle}</div> */}
      <div className="card-body">
        {getRedirect(redirect)}
        <ImageHelper product={product} />
        <p className="card-p  mt-2 text-muted">{cardTitle}</p>
        <p className="black-10 bg-white font-weight-bold">$ {cardPrice}</p>

        {showStock(product.stock)}
        <br />
        {showViewButton(showViewProductButton)}

        {showAddToCart(addtoCart)}

        {showRemoveToCart(removeFromCart)}
      </div>
    </div>
  );
};

export default Card;
