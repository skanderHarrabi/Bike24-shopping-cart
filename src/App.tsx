import Cart from "./components/Cart/Cart";
import Products from "./components/Products";
import "./globalStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Products />
      <Cart />
    </>
  );
};

export default App;
