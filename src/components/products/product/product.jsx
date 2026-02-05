import React, { useState } from "react";
import "./product.css";

const Product = ({ product, handelCountCard, handleAddCard }) => {
  //   console.log(product);

  const [buy, setBuy] = useState(false);
  const handleCard = () => {
    setBuy(!buy);
    handelCountCard();
  };
  return (
    <div className={`card ${buy && "cardBg"}`}>
      <h3>category : {product.category}</h3>
      <img className="w" src={product.image} alt="product" />
      <p>price: ${product.price}</p>
      <button onClick={handleCard}>{buy ? "cancel" : "buy"}</button>
      <button onClick={() => handleAddCard(product)}>add to card</button>
    </div>
  );
};

export default Product;
