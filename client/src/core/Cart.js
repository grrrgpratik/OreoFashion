import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import { Link } from "react-router-dom";
import { loadCart, removeItemFromCart } from "./helper/cartHelper";
import Payment from "./Payment";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { API } from "../backend";

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

      {/* <div className="col-6">
        {products.length > 0 ? (
          loadAllProdcuts(products)
        ) : (
          <h3> No Products in cart</h3>
        )}
      </div>
      <div className="col-6">
        <Payment products={products} setReload={setReload} reload={reload} />
      </div> */}
      <Row>
        <Col md={8}>
          {products.length === 0 ? (
            <h3> No Products in cart</h3>
          ) : (
            <div>
              <h1>Shopping Cart</h1>
              <ListGroup variant="flush">
                {products.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2}>
                        <Image
                          src={`${API}/product/photo/${item._id}`}
                          alt={item.name}
                          fluid
                          rounded
                        />
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>${item.price}</Col>
                      <Col md={2}>
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={() => {}}
                        >
                          {[...Array(item.stock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => {
                            removeItemFromCart(item._id);
                            setReload(!reload);
                          }}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal (
                  {products.reduce(
                    (acc, item) => acc + parseInt(item.count),
                    0
                  )}
                  ) items
                </h2>
                $
                {products
                  .reduce((acc, item) => acc + item.count * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="btn-block" to="/checkout">
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={products.length === 0}
                    onClick={() => {}}
                  >
                    Proceed To Checkout
                  </Button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Base>
  );
};

export default Cart;
