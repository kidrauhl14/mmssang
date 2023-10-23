import React from 'react'
import { EmblaCarousel } from '../../components/carousel'

export default function HomePage() {

  const categories = ["clothing", "jewelery", "electronics"];

  return (
    <>
      <EmblaCarousel />
      <div>
        {categories.map((category) => (
          <section key={category} className="category">
            <h1 className="category__title">{category}</h1>
            <div className="category__product"></div>
          </section>
        ))}
      </div>
    </>
  );
}
