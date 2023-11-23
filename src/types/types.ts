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
  clearCart: () => void;
  removeFromCart: (id: string) => void;
  MAX_NUM_PRODUCTS: number;
};

export type NotificationProviderProps = {
  children: ReactNode;
};

export type NotificationContextType = {
  openNotification: (title: string, description: string) => void;
};

export interface ModalCheckoutProps {
  show: boolean;
  onHide: () => void;
}
