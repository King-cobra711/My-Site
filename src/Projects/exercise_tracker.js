import Carousel from "react-bootstrap/Carousel";

const ExerciseTracker = (props) => {
  return (
    <Carousel interval="8000" variant="dark">
      <Carousel.Item>
        <img src="./exercise_tracker/exercise_tracker1.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="./exercise_tracker/exercise_tracker2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img src="./exercise_tracker/exercise_tracker3.png" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="./exercise_tracker/exercise_tracker4.png"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ExerciseTracker;
