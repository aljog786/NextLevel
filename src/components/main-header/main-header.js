"use client"
import Link from "next/link";
import Image from "next/image";
import { Container, Navbar, Nav } from "react-bootstrap";
import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import "./MainHeader.scss";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <Navbar expand="md" className="bg-transparent position-relative z-3">
        <Container>
          <Navbar.Brand
            as={Link}
            href="/"
            className="d-flex align-items-center gap-2 text-white fs-3 fw-bold"
          >
            <Image src={logoImg} alt="Logo" width={80} height={80} priority />
            NextLevel
          </Navbar.Brand>

          <Nav className="ms-auto d-flex fs-5 fw-bold">
            <Nav.Link as={Link} href="/meals" className="navlink text-white">
              Browse Meals
            </Nav.Link>
            <Nav.Link as={Link} href="/community" className="navlink text-white">
              Foodies Community
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
