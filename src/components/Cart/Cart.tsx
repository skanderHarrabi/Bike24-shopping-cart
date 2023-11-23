import {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useCart} from "../../hooks/useCart";
import CartTable from "../Table";
import CustomProgress from "../Progress";
import "./cart.css";
import {Button} from "antd";
import {useNotification} from "../../hooks/useNotification";
import {formatNumberWithTwoDecimals} from "../../utils/formatNumbersWithTwoDecimals";

const Cart = () => {
  const {cartItems, clearCart} = useCart();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {openNotification} = useNotification();
  const handleBuyButton = () => {
    if (cartItems.length <= 0) {
      openNotification(
        "Your shopping cart is currently empty.",
        "Please consider adding products to your cart."
      );
    } else {
      setIsModalVisible(true);
    }
  };

  return (
    <>
      <Container className="cart-container p-4">
        <h4>Cart</h4>

        <CartTable />

        <Container>
          <Row className="d-flex ml-auto">
            <h4>
              Total:{" "}
              {formatNumberWithTwoDecimals(
                cartItems.reduce((total, cartItem) => {
                  return (
                    total +
                    cartItem.prod.price *
                      ((100 + cartItem.prod.taxRate) / 100) *
                      cartItem.amount
                  );
                }, 0)
              )}
            </h4>
          </Row>
        </Container>

        <Container className="pt-4 align-items-center justify-content-center">
          <Row className="w-50 align-items-center justify-content-between g-3 m-auto">
            <Col className="mt-0">
              <Button
                size="large"
                onClick={clearCart}
                className="custom-button-clear"
              >
                Clear
              </Button>
            </Col>

            <CustomProgress />

            <Col className="mt-0">
              <Button
                size="large"
                onClick={handleBuyButton}
                className="custom-button-buy"
              >
                Buy
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Cart;
