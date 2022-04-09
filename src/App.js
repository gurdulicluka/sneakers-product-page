import React from "react";
import Header from "./components/Layout/Header";
import PageContainer from "./components/Layout/PageContainer";
import ProductView from "./components/Pages/ProductView";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <PageContainer>
        <Header />
        <ProductView />
      </PageContainer>
    </CartProvider>
  );
}

export default App;
