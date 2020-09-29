import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import Payment from "./Payment";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProdcuts = (products) => {
    return (
      <div>
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              product={product}
              removeFromCart={true}
              addtoCart={false}
              setReload={setReload}
              reload={reload}
              cartUpdate={true}
            />
          );
        })}
      </div>
    );
  };

  // const loadCheckout = () => {
  //   return (
  //     <div>
  //       <h2>This section is to load checkout</h2>
  //     </div>
  //   );
  // };
  return (
    <Base
      title="Cart Page"
      description="Ready to checkout"
      className="container"
    >
      {/* <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"> </th>
                  <th scope="col">Product</th>

                  <th scope="col" className="text-center">
                    Quantity
                  </th>
                  <th scope="col" className="text-right">
                    Price
                  </th>
                  <th scope="col" className="text-center">
                    Action
                  </th>
                  <th scope="col" className="text-right">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="https://dummyimage.com/50x50/55595c/fff" />
                  </td>
                  <td>Product Name Dada</td>

                  <td>
                    <input className="form-control" type="number" value="1" />
                  </td>
                  <td className="text-right">124,90 €</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                  <td className="text-right">124,90 €</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://dummyimage.com/50x50/55595c/fff" />{" "}
                  </td>
                  <td>Product Name Toto</td>

                  <td>
                    <input className="form-control" type="number" value="1" />
                  </td>
                  <td className="text-right">33,90 €</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                  <td className="text-right">124,90 €</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://dummyimage.com/50x50/55595c/fff" />
                  </td>
                  <td>Product Name Titi</td>
                  <td>
                    <input className="form-control" type="number" value="1" />
                  </td>
                  <td className="text-right">70,00 €</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                  <td className="text-right">124,90 €</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Sub-Total</td>
                  <td className="text-right">255,90 €</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Shipping</td>
                  <td className="text-right">6,90 €</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td className="text-right">
                    <strong>346,90 €</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col mb-2">
          <div className="row">
            <div className="col-md-6">
              <button className="btn btn-block btn-light">
                Continue Shopping
              </button>
            </div>
            <div className=" col-md-6">
              <button className="btn  btn-block btn-success">Checkout</button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="col-6">
        {products.length > 0 ? (
          loadAllProdcuts(products)
        ) : (
          <h3> No Products in cart</h3>
        )}
      </div>
      <div className="col-6">
        <Payment products={products} setReload={setReload} reload={reload} />
      </div>
    </Base>
  );
};

export default Cart;
