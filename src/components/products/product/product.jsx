import React from "react";
import "./product.css";
const Product = ({ product, handelBuyProducts }) => {
  //   console.log(product);
  return (
    <div className="card">
      <h3>category: {product.category} </h3>
      <img className="w" src={product.image} alt="" />
      <p>price: ${product.price} </p>
      <button onClick={handelBuyProducts}>buy</button>
    </div>
  );
};

export default Product;
