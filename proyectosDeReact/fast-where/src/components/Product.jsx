import React from "react";
import "../style/Products.css";

const Product = ({ product, handleAddToCart }) => {
  return (
    <>
    <div className="Products-item">
      <img src={product.image} alt={product.titel} />
      <div className="Product-item-info">
        <h2>{product.title}</h2>
        <span>${product.price}</span>
      </div>
      <p>{product.description}</p>
      <button type="button" onClick={handleAddToCart(product)}>
        comprar
      </button>
    </div>
    </>
  );
};

export default Product;
