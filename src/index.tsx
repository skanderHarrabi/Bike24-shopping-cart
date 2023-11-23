import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {CartProvider} from "./context/CartContext";
import {NotificationProvider} from "./context/NotificationContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </CartProvider>
  </React.StrictMode>
);
reportWebVitals();
