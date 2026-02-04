import React, { use, useState } from "react";
import Product from "./product/product";
import "./products.css";

const Products = ({ productsPromise }) => {
  const products = use(productsPromise);

  const [card, setCard] = useState(0);

  const handelAddCard = () => {
    // console.log("add card to click");
    const addCard = card + 1;
    setCard(addCard);
  };

  return (
    <div>
      <h3>All Products is here : {products.length} </h3>
      <h3>buy products: {card}</h3>
      <div className="cardProduct">
        {products.map((product) => (
          <Product
            key={product.id}
            handelAddCard={handelAddCard}
            product={product}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
