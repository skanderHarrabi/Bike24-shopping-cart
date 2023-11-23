import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {useCart} from "../../hooks/useCart";
import {Empty, Space, Table} from "antd";
import type {ColumnsType} from "antd/es/table";
import {CartItem} from "../../types/types";

const CartTable = () => {
  const {cartItems, removeFromCart} = useCart();

  const columns: ColumnsType<CartItem> = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (_, record) => (
        <Space size="middle">{record.prod.productName}</Space>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (_, record) => <Space size="middle">{record.amount}</Space>,
    },
    {
      title: "Unit Price",
      dataIndex: "price",
      key: "price",
      render: (_, record) => <Space size="middle">{record.prod.price}</Space>,
    },
    {
      title: "Tax",
      dataIndex: "taxRate",
      key: "taxRate",
      render: (_, record) => (
        <Space size="middle">{record.prod.taxRate}%</Space>
      ),
    },
    {
      title: "Price (no Tax)",
      dataIndex: "priceNoTax",
      key: "priceNoTax",
      render: (_, record) => (
        <Space size="middle">{record.prod.price * record.amount}</Space>
      ),
    },
    {
      title: "Price",
      dataIndex: "priceInclTax)",
      key: "priceInclTax",
      render: (_, record) => (
        <Space size="middle">
          {((record.prod.price * (100 + record.prod.taxRate)) / 100) *
            record.amount}
        </Space>
      ),
    },
    {
      title: "Remove",
      dataIndex: "Remove",
      key: "Remove",
      render: (_, record) => (
        <Button variant="danger" onClick={() => removeFromCart(record.prod.id)}>
          X
        </Button>
      ),
    },
  ];

  return (
    <>
      <Container className="p-4">
        {cartItems.length > 0 ? (
          <Table columns={columns} dataSource={cartItems} pagination={false} />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
};

export default CartTable;
