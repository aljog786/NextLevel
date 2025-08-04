import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getMealImages } from "@/lib/meals";
import ImageSlideshow from "@/components/images/image-slideshow";
import "./page.scss";

export default async function Home() {
  const images = await getMealImages();
  return (
    <>
      <header className="pt-5 pb-4 text-light">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={5} className="d-flex align-self-stretch">
              <ImageSlideshow images={images} />
            </Col>
            <Col md={5}>
              <h1 className="text-primary display-2 fw-bold">
                NextLevel Food for NextLevel Foodies
              </h1>
              <p className="mb-4 text-primary">
                Taste & share food from all over the world.
              </p>
              <div className="d-flex flex-column flex-md-row gap-3">
                <Link href="/community" passHref>
                  <Button
                    variant="transparent"
                    className="text-primary border-0"
                  >
                    Join the Community
                  </Button>
                </Link>
                <Link href="/meals" passHref>
                  <Button className="text-white rounded-pill" variant="primary">
                    Explore Meals
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <main className="py-5">
        <Container>
          <section className="mb-5 text-center">
            <h2 className="mb-3 fw-semibold text-primary">How it works</h2>
            <p className="lead text-white">
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>
            <p className="lead text-white">
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>

          <section className="text-center">
            <h2 className="mb-3 fw-semibold text-primary">
              Why NextLevel Food?
            </h2>
            <p className="lead text-white">
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes,
              and to connect with other food lovers.
            </p>
            <p className="lead text-white">
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>
        </Container>
      </main>
    </>
  );
}
