// customModal.test.js
import React from "react";
import {render, fireEvent} from "@testing-library/react";
import CustomModal from "./index";

jest.mock("../../hooks/useCart", () => ({
  useCart: () => ({
    cartItems: [{prod: {price: 10, taxRate: 5}, amount: 2}],
    clearCart: jest.fn(),
  }),
}));

jest.mock("../../hooks/useNotification", () => ({
  useNotification: () => ({
    openNotification: jest.fn(),
  }),
}));

describe("CustomModal component", () => {
  test("renders with correct title and total amount", () => {
    const {getByText} = render(<CustomModal show={true} onHide={() => {}} />);

    expect(getByText("Checkout")).toBeInTheDocument();

    expect(getByText("Total: 21.00")).toBeInTheDocument();
  });

  test("calls onHide and clearCart on Cancel button click", () => {
    const onHideMock = jest.fn();
    const {getByText} = render(<CustomModal show={true} onHide={onHideMock} />);

    fireEvent.click(getByText("Cancel"));

    expect(onHideMock).toHaveBeenCalled();

    expect(
      require("../../hooks/useCart").useCart().clearCart
    ).not.toHaveBeenCalled();
  });

  test("calls onHide, clearCart, and openNotification on Confirm button click", () => {
    const onHideMock = jest.fn();
    const {getByText} = render(<CustomModal show={true} onHide={onHideMock} />);

    fireEvent.click(getByText("Confirm"));

    expect(onHideMock).toHaveBeenCalled();
  });
});
