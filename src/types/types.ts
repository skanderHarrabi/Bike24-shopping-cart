import {ReactNode} from "react";

export type productProps = {
  id: string;
  productName: string;
  maxAmount: number;
  taxRate: number;
  price: number;
};

export type CartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  prod: productProps;
  amount: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (prod: productProps, amount: number) => void;
  MAX_NUM_PRODUCTS: number;
};
