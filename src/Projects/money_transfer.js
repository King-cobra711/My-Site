import Carousel from "react-bootstrap/Carousel";

const Money = (props) => {
  return (
    <Carousel interval="8000" variant="dark">
      <Carousel.Item>
        <img src="./money_transfer/mt1.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./money_transfer/mt2.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./money_transfer/mt3.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./money_transfer/mt4.png" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Money;
