import React from "react";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import MainProducts from "./components/mainProducts/MainProducts";

const App = () => {
  return (
    <main className="bg-white text-black">
      <Header />
      <Products />
      <MainProducts />
    </main>
  );
};

export default App;
