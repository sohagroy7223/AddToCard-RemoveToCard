import React, { use, useEffect, useState } from "react";
import Product from "./product/product";
import "./products.css";
import { addToStoreCard, getStoreCard } from "../localStore/localStore";

const Products = ({ productsPromise }) => {
  const products = use(productsPromise);

  const [addCard, setAddCard] = useState([]);

  useEffect(() => {
    const storeCardIds = getStoreCard();
    // console.log(storeCardIds, products);

    const storeCard = [];

    for (const id of storeCardIds) {
      // console.log(id);
      const cardProducts = products.find((product) => product.id === id);
      if (cardProducts) {
        storeCard.push(cardProducts);
        setAddCard(...addCard, storeCard);
      }
    }
  }, [products]);

  const [card, setCard] = useState(0);

  const handleAddCard = (product) => {
    // console.log("add to card", product);
    const allCard = [...addCard, product];
    // console.log(allCard);
    setAddCard(allCard);
    // console.log(product.id);
    addToStoreCard(product.id);
  };

  const handelCountCard = () => {
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
            handelCountCard={handelCountCard}
            product={product}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
