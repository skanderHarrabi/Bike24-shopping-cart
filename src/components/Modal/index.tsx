import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useCart} from "../../hooks/useCart";
import {useNotification} from "../../hooks/useNotification";
import {ModalCheckoutProps} from "../../types/types";
import {formatNumberWithTwoDecimals} from "../../utils/formatNumbersWithTwoDecimals";

const CustomModal = (props: ModalCheckoutProps) => {
  const {cartItems, clearCart} = useCart();
  const {openNotification} = useNotification();

  const handleConfirm = () => {
    openNotification("Success!", "Your transaction has been completed.", true);
    props.onHide();
    clearCart();
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Your Purchase</h4>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
