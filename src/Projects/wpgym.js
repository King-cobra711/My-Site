import Carousel from "react-bootstrap/Carousel";

const Wpgym = (props) => {
  return (
    <Carousel interval="10000" variant="dark">
      <Carousel.Item>
        <img src="./wpgym/wpgym1.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./wpgym/wpgym2.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./wpgym/wpgym3.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./wpgym/wpgym4.png" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Wpgym;
