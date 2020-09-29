import DropIn from "braintree-web-drop-in-react";
import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty } from "./helper/cartHelper";
import { createOrder } from "./helper/orderHelper";
import { getmeToken, processPayment } from "./helper/paymentbhelper";

const Payment = ({ products, setReload = (f) => f, reload = undefined }) => {
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: {},
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getmeToken(userId, token).then((info) => {
      console.log("INFORMATION", info);
      if (info.error) {
        setInfo({
          ...info,
          error: info.error,
        });
      } else {
        const clientToken = info.clientToken;
        setInfo({ clientToken });
      }
    });
  };

  useEffect(() => {
    getToken(userId, token);
  }, [userId, token]);

  const onPurchase = () => {
    setInfo({ loading: true });
    let nonce;
    info.instance
      .requestPaymentMethod()
      .then((data) => {
        nonce = data.nonce;
        const paymentData = {
          paymentMethodNonce: nonce,
          amount: getAmount(),
        };
        processPayment(userId, token, paymentData)
          .then((response) => {
            setInfo({ ...info, success: response.success });
            console.log("Payment Success");

            const orderData = {
              products: products,
              transaction_id: response.transaction.id,
              amount: response.transaction.amount,
            };
            createOrder(userId, token, orderData);
            //Empty cart
            cartEmpty(() => {
              console.log("did we got the crash? ");
            });
            //force reload
            setReload(!reload);
          })
          .catch((err) => {
            setInfo({ loading: false, success: false });
            console.log(err);
          });
      })
      .catch((err) => {
        setInfo({ loading: false, success: false });
        console.log(err);
      });
  };

  const getAmount = () => {
    let amount = 0;
    products.map((p) => (amount += p.price * p.count));
    return amount;
  };

  const showbtDropIn = () => {
    return (
      <div>
        {info.clientToken !== null && products.length > 0 ? (
          <div>
            <DropIn
              options={{ authorization: info.clientToken }}
              onInstance={(instance) => (info.instance = instance)}
            />
            <button
              className="btn btn-block btn-success"
              onClick={() => {
                onPurchase();
              }}
            >
              Buy
            </button>
          </div>
        ) : (
          <h3>Please login or add something to cart</h3>
        )}
      </div>
    );
  };

  return (
    <div>
      <h3> You bill is {getAmount()}</h3>
      {showbtDropIn()}
    </div>
  );
};

export default Payment;
