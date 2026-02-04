import React, { use } from "react";
import Product from "./product/product";
import "./products.css";

const Products = ({ productsPromise }) => {
  const products = use(productsPromise);
  console.log(products);
  return (
    <div>
      <h3>All Products is here {products.length}</h3>

      <div className="cardProduct">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
