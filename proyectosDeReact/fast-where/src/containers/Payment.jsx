import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import AppContext from "../context/AppContext";
import "../style/Payment.css";

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();

  const PaypalOtions = {
    clientId: "API",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "verticar",
    shape: "react",
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        Payment: data,
      };
      addNewOrder(newOrder);
      history.push("/checkout/sucess");
    }
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <div className="Payment">
      <div className="Payment-content">
        {cart.length > 0 ? <h3>Resument del pedido</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={PaypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log("Start Payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
