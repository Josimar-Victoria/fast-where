import React from "react";
import Products from "../components/Products";
import inicialState from "../inicialState";
const Home = () => {
  return <Products Products={inicialState.products} />;
};
export default Home;
