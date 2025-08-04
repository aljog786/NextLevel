"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setPickedImage(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <Form.Group className="mb-4">
      <Form.Label className="fw-semibold">{label}</Form.Label>

      <Row className="align-items-center">
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <div
            className="border rounded position-relative w-100"
            style={{
              aspectRatio: "1 / 1",
              minHeight: "250px",
              overflow: "hidden",
            }}
          >
            {!pickedImage ? (
              <div className="d-flex justify-content-center align-items-center h-100 text-muted">
                No image picked yet.
              </div>
            ) : (
              <Image
              className="object-fit-cover"
                src={pickedImage}
                alt="The image selected by the user."
                fill
              />
            )}
          </div>
        </Col>

        <Col xs={12} md={6}>
          <Form.Control
            type="file"
            id={name}
            name={name}
            accept="image/png, image/jpeg"
            ref={imageInput}
            onChange={handleImageChange}
          />
        </Col>
      </Row>
    </Form.Group>
  );
}
