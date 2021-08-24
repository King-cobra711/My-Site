import classes from "./projects.module.css";
import Carousel from "react-bootstrap/Carousel";

const Books = (props) => {
  return (
    <Carousel interval="10000" variant="dark">
      <Carousel.Item>
        <img src="./books/book1.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./books/book2.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./books/book3.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./books/book4.png" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Books;
