import classes from "./projects.module.css";
import Carousel from "react-bootstrap/Carousel";

const ExampleTwo = (props) => {
  return (
    <Carousel interval="10000" variant="dark">
      <Carousel.Item>
        <img src="./wpgym/wpgym1.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./wpgym/wpgym2.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./logo192.png" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ExampleTwo;
