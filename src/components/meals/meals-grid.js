import { Container, Row } from "react-bootstrap";
import Meal from "./meal";

export default function MealsGrid({ meals }) {
  return (
    <Container>
      <Row>
        {meals.map((meal) => (
          <Meal key={meal._id} {...meal} />
        ))}
      </Row>
    </Container>
  );
}