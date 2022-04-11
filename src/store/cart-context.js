import React from "react";

const CartContext = React.createContext({
  items: [],
  itemCount: 0,
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
