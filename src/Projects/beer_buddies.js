import Carousel from "react-bootstrap/Carousel";

const Books = (props) => {
  return (
    <Carousel interval="8000" variant="dark">
      <Carousel.Item>
        <img src="./beer_buddies/bb1.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./beer_buddies/bb2.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./beer_buddies/bb3.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./beer_buddies/bb4.png" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Books;
