import {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button} from "antd";
import {productProps} from "../../types/types";
import {useCart} from "../../hooks/useCart";
import ProductList from "../ProductsList";
import Amount from "../Amount";
import "./products.css";

const Products = () => {
  const {addToCart, MAX_NUM_PRODUCTS, cartItems} = useCart();

  const [amount, setAmount] = useState(0);
  const [selected, setSelected] = useState<productProps | undefined>({
    id: "",
    productName: "",
    maxAmount: 0,
    taxRate: 0,
    price: 0,
  });

  const handleAddProduct = () => {
    if (amount == 0) {
      console.log("amount 0");
    } else if (cartItems.length >= MAX_NUM_PRODUCTS) {
      console.log("max products");
    } else {
      if (selected !== undefined) {
        addToCart(selected, amount);
      }
    }
  };

  return (
    <>
      <Container className="products-container p-4 align-items-center justify-content-center">
        <h4>Products</h4>
        <Row className="w-full align-items-center justify-content-between g-3 mb-2">
          <ProductList
            setAmount={setAmount}
            setSelected={setSelected}
          ></ProductList>

          <Amount
            amount={amount}
            setAmount={setAmount}
            selectedProduct={selected}
          ></Amount>

          <Col>
            <div className="p-2">
              <span className="p-2">{amount}</span>
              <span className="p-2">X</span>
              <span className="p-2">
                {typeof selected !== "undefined" && selected.price}
              </span>
              <span className="p-2">=</span>
              <span className="p-2">
                {typeof selected !== "undefined" && selected.price * amount}
              </span>
            </div>
          </Col>

          <Col>
            <Button type="primary" size="large" onClick={handleAddProduct}>
              add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
