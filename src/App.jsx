import { Suspense } from "react";
import "./App.css";
import Products from "./components/products/products";

// const productsPromise = fetch("https://fakestoreapi.com/products").then((res) =>
//   res.json(),
// );
const products = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

function App() {
  const productsPromise = products();
  return (
    <>
      <Suspense fallback={<h3>products are loading...</h3>}>
        <Products productsPromise={productsPromise}></Products>
      </Suspense>
    </>
  );
}

export default App;
