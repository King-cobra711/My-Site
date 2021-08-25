import Carousel from "react-bootstrap/Carousel";

const Transco = (props) => {
  return (
    <Carousel interval="10000" variant="dark">
      <Carousel.Item>
        <img src="./transco_brisbane/transco1.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./transco_brisbane/transco2.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./transco_brisbane/transco3.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./transco_brisbane/transco4.png" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Transco;
