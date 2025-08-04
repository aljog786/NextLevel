import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import { Suspense } from "react";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import "@/app/meals/page.scss";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className="text-white py-5">
        <Container>
          <h1 className="display-5 fw-bold">
            Delicious meals, created{" "}
            <span className="text-primary">by you</span>
          </h1>
          <p className="lead">
            Choose your favorite recipe and cook it yourself. It is easy and
            fun!
          </p>
          <Link href="/meals/share" passHref >
            <Button variant="primary" size="lg" className="fw-semibold text-white">
              Share Recipe
            </Button>
          </Link>
        </Container>
      </header>
      <main className="py-5">
        <Suspense
          fallback={<p className="text-center text-light">Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
