import Col from "react-bootstrap/Col";
import productsList from "../../data/products.json";
import {productProps} from "../../types/types";
import {Select} from "antd";
import "./productsList.css";

type Props = {
  setAmount: (amount: number) => void;
  setSelected: (product: productProps | undefined) => void;
};

const ProductList: React.FC<Props> = ({setAmount, setSelected}) => {
  const handleSelected = (value: string) => {
    const currentId = value;
    setSelected(
      productsList.find((i: productProps) => {
        return i.id === currentId;
      })
    );
    setAmount(0);
  };

  const options = [
    {value: "", label: "Choose a product", disabled: true},
    ...productsList.map((item: productProps) => ({
      value: item.id,
      label: item.productName,
    })),
  ];

  return (
    <>
      <Col>
        <Select
          className="select-container"
          size="large"
          defaultValue=""
          style={{width: 170}}
          onChange={handleSelected}
          options={options}
        />
      </Col>
    </>
  );
};

export default ProductList;
