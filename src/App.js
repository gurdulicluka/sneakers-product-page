import React from "react";
import Header from "./components/Layout/Header";
import ProductView from "./components/Pages/ProductView";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <ProductView />
    </CartProvider>
  );
}

export default App;
