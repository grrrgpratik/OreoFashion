import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base
      title="Home Page"
      description="Welcome to the Tshirt store"
      className="container-fluid"
    >
      <h1 className="text-dark mb-4">New Arrivals</h1>
      <div className="row">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-3 mb-4">
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </Base>
  );
}
