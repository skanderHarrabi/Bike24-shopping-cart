import Col from "react-bootstrap/Col";
import {useCart} from "../../hooks/useCart";
import {Progress, Space} from "antd";

const CustomProgress = () => {
  const {cartItems, MAX_NUM_PRODUCTS} = useCart();
  return (
    <>
      <Col>
        <div className="text-center">
          <Space wrap>
            <Progress
              type="circle"
              strokeColor="white"
              percent={(cartItems.length / MAX_NUM_PRODUCTS) * 100}
              format={(percent) => (
                <div className="text-white">
                  {percent ? percent / 10 : percent} Items
                </div>
              )}
            />
          </Space>
        </div>
      </Col>
    </>
  );
};

export default CustomProgress;
