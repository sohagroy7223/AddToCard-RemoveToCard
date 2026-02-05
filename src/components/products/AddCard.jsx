import React from "react";

const AddCard = ({ product, handleRemoveCard }) => {
  return (
    <div className="productCard">
      <h3>{product.category}</h3>
      <img className="img" src={product.image} alt="" />
      <p>${product.price}</p>
      <button onClick={handleRemoveCard}>remove card</button>
    </div>
  );
};

export default AddCard;
