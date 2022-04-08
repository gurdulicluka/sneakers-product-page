import React from "react";
import PageContainer from "./components/Layout/PageContainer";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <PageContainer />
    </CartProvider>
  );
}

export default App;
