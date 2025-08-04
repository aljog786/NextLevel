"use client";
import { useActionState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { shareMeal } from "@/lib/actions";
import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

const ShareMealPage = () => {
  const [state, formAction] = useActionState(shareMeal, { message: null });
  return (
    <Container className="py-5" style={{ maxWidth: "1000px" }}>
      <header className="text-center mb-5">
        <h1 className="text-white display-5 fw-bold">
          Share your <span className="text-primary fw-bold">favorite meal</span>
        </h1>
        <p className="lead text-white-50">
          Create a new recipe and share it with the world!
        </p>
      </header>

      <Form className="text-light" action={formAction}>
        <Row className="">
          <Col lg={6} md={6}>
            <h2 className="h4 text-primary mb-3">Meal Details</h2>
            <Form.Group controlId="title" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                className="bg-primary text-white border-0"
                type="text"
                name="title"
                placeholder="Enter meal title"
                required
              />
            </Form.Group>

            <Form.Group controlId="summary" className="mb-3">
              <Form.Label>Summary</Form.Label>
              <Form.Control
                className="bg-primary text-white border-0"
                type="text"
                name="summary"
                placeholder="Enter a brief summary of the meal"
                required
              />
            </Form.Group>

            <Form.Group controlId="instructions" className="mb-3">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                className="bg-primary text-white border-0"
                as="textarea"
                name="instructions"
                rows={10}
                placeholder="Enter detailed instructions for preparing the meal"
                required
              />
            </Form.Group>
          </Col>

          <Col lg={6} md={6}>
            <div className="mb-4">
              <h2 className="h4 text-primary mb-3">Creator Info</h2>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  className="bg-primary text-white border-0"
                  type="text"
                  name="name"
                  placeholder="Enter your fullname"
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Your email</Form.Label>
                <Form.Control
                  className="bg-primary text-white border-0"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </Form.Group>
            </div>

            <ImagePicker label="Meal Image" name="image" />
            {state.message && <p>{state.message}</p>}
          </Col>
        </Row>

        <div className="mt-5 text-center">
          <MealsFormSubmit />
        </div>
      </Form>
    </Container>
  );
};

export default ShareMealPage;
