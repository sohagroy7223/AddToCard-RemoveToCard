// import React, { useState } from "react";
import "./product.css";

const Product = ({ product, handelAddCard }) => {
  //   console.log(product);

  //   const [buy, setBuy]=useState

  return (
    <div className="card">
      <h3>category : {product.category}</h3>
      <img className="w" src={product.image} alt="" />
      <p>price: {product.price}</p>
      <button onClick={() => handelAddCard()}>buy</button>
    </div>
  );
};

export default Product;
