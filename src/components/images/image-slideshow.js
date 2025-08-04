"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageSlideshow({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className={`img-fluid object-fit-cover rounded shadow o ${
            index === currentImageIndex ? "d-block" : "d-none"
          }`}
          priority={index === 0}
          width="800"
          height="800"
        />
      ))}
    </>
  );
}
