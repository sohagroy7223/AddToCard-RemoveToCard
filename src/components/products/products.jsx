import React, { use, useState } from "react";
import Product from "./product/product";
import "./products.css";

const Products = ({ productsPromise }) => {
  const products = use(productsPromise);

  const [card, setCard] = useState(0);

  const [addCard, setAddCard] = useState([]);

  const handleAddCard = (product) => {
    // console.log("add to card", product);
    const allCard = [...addCard, product];
    // console.log(allCard);
    setAddCard(allCard);
  };

  const handelAddCard = () => {
    // console.log("add card to click");
    const addCard = card + 1;
    setCard(addCard);
  };

  return (
    <div>
      <h3>All Products is here : {products.length} </h3>
      <h3>buy products: {card}</h3>
      <div className="addToCard">
        {addCard.map((product) => (
          <div key={product.id} className="productCard">
            <h3>{product.category}</h3>
            <img className="img" src={product.image} alt="" />
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <div className="cardProduct">
        {products.map((product) => (
          <Product
            key={product.id}
            handleAddCard={handleAddCard}
            handelAddCard={handelAddCard}
            product={product}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
