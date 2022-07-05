import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (book) => {
    const bookList = JSON.parse(localStorage.getItem("cart")) || [];
    bookList.push(book);
    localStorage.setItem("cart", JSON.stringify(bookList));
    setCart(bookList);
  };

  const removeFromCart = (book) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.id !== book.id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
