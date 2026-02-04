import React from "react";
import "./product.css";
const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="card">
      <h3>category: {product.category} </h3>
      <img className="w" src={product.image} alt="" />
      <p>price: ${product.price} </p>
    </div>
  );
};

export default Product;
