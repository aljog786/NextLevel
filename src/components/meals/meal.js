"use client";
import { Card, Button, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function Meal({ title, slug, image, summary, creator }) {
  return (
    <Col lg={4} md={6} sm={12} className="mb-4">
      <Card className="h-100 bg-primary bg-gradient bg-opacity-10 border-0 shadow-sm text-light">
        <div className="position-relative" style={{ height: "200px" }}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-fit-cover rounded-top"
          />
        </div>
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="fs-5 fw-bold">{title}</Card.Title>
            <Card.Subtitle className="text-primary small mb-2">
              by {creator}
            </Card.Subtitle>
            <Card.Text className="small">{summary}</Card.Text>
          </div>
          <div className="text-end mt-3">
            <Link href={`/meals/${slug}`} passHref>
              <Button bg="primary" className="text-white fw-semibold px-3">
                View Details
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
