import Image from "next/image";
import { notFound } from "next/navigation";
import { getMeal } from "@/lib/meals";
import { Container, Row, Col, Ratio } from "react-bootstrap";
import "./page.scss"; 

export default async function MealDetailsPage({ params }) {
  const meal = await getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  const instructionsHtml = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <Container as="header" className="py-5">
        <Row className="align-items-center g-5">
          <Col
            lg={6}
            md={7}
            className="animate__animated animate__slideInLeft animate__slow"
          >
            <Ratio aspectRatio="16x9" className="rounded-4 shadow-sm">
              <Image
                src={
                  meal.image?.startsWith("http") ? meal.image : "/fallback.jpg"
                }
                alt={meal.title}
                fill
                className="rounded-4 object-fit-cover"
              />
            </Ratio>
          </Col>
          <Col
            lg={6}
            md={5}
            className="text-light animate__animated animate__slideInRight animate__slow"
          >
            <h1 className="display-4 fw-bold text-uppercase">{meal.title}</h1>
            <p className="fs-5 fst-italic text-primary">
              by{" "}
              <a
                href={`mailto:${meal.creator_email}`}
                className="text-decoration-none text-primary"
              >
                {meal.creator}
              </a>
            </p>
            <p className="fs-5">{meal.summary}</p>
          </Col>
        </Row>
      </Container>

      <Container
        as="main"
        className="mb-5 animate__animated animate__slideInUp animate__slow"
      >
        <div
          className="bg-primary bg-opacity-10 text-white rounded p-4 p-md-5"
          dangerouslySetInnerHTML={{ __html: instructionsHtml }}
        />
      </Container>
    </>
  );
}
