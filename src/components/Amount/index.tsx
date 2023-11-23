import Col from "react-bootstrap/Col";
import {Slider} from "antd";
import {productProps} from "../../types/types";
import "./amount.css";

type Props = {
  amount: number;
  setAmount: (amount: number) => void;
  selectedProduct: productProps | undefined;
};

const Amount: React.FC<Props> = ({amount, setAmount, selectedProduct}) => {
  const handleAmount = (amount: number) => {
    if (isNaN(amount)) {
      return;
    }
    setAmount(amount);
  };

  return (
    <>
      <Col>
        <div className="text-center">
          <Slider
            min={0}
            disabled={selectedProduct?.id != "" ? false : true}
            max={
              typeof selectedProduct !== "undefined"
                ? selectedProduct.maxAmount
                : 0
            }
            onChange={handleAmount}
            value={amount}
          />
        </div>
      </Col>
    </>
  );
};

export default Amount;
