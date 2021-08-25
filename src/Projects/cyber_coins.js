import Carousel from "react-bootstrap/Carousel";

const Coins = (props) => {
  return (
    <Carousel interval="10000" variant="dark">
      <Carousel.Item>
        <img src="./cyber_coins/cc1.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./cyber_coins/cc2.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./cyber_coins/cc3.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./cyber_coins/cc4.png" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Coins;
