import { useState } from "react";
import inicialState from "../inicialState";
const UseInicialState = () => {
  const [state, setState] = useState(inicialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };
  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };
  const inputChange = (payload) => {
    setState({
      ...state,
      cupones: [...state.cupones, payload],
    });
  };
  return {
    inputChange,
    addNewOrder,
    addToBuyer,
    removeFromCart,
    addToCart,
    state,
  };
};
export default UseInicialState;
