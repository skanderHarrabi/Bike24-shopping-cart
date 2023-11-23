import {createContext, useState} from "react";
import {
  CartContextType,
  productProps,
  CartProviderProps,
  CartItem,
} from "../types/types";

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({children}: CartProviderProps) => {
  const MAX_NUM_PRODUCTS = 10;
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (prod: productProps, amount: number) => {
    if (cartItems.length >= MAX_NUM_PRODUCTS) {
      console.log("The product limit has been reached.");
    } else {
      setCartItems((currentItems) => {
        if (currentItems.find((item) => item.prod.id === prod.id) == null) {
          return [...currentItems, {prod, amount}];
        } else {
          return currentItems.map((item) => {
            if (item.prod.id === prod.id) {
              return {...item, amount: amount};
            } else {
              return item;
            }
          });
        }
      });
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.prod.id !== id);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        MAX_NUM_PRODUCTS,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
