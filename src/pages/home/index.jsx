import React, {useEffect, useState} from 'react';
import { EmblaCarousel } from '../../components/carousel'
import { fetchAllProducts } from '../../api/productAPI';
import "./index.scss";

export default function HomePage() {
  // products 배열 내의 각 요소: 개별 상품의 정보를 나타내는 객체
  const [products, setProducts] = useState([]);
  const categories = ["clothing", "jewelery", "electronics"];

  useEffect(() => {
    fetchAllProducts()
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("products를 불러오는 중에 에러 발생", error)
      );
  }, []);

  return (
    <>
      <EmblaCarousel />
      <div>
        {categories.map((category) => (
          <section key={category} className="category">
            <h1 className="category__title link">{category}</h1>
            <article>
              {products
                .filter((product) =>
                  category === "clothing"
                    ? product.category.includes("men's clothing") ||
                      product.category.includes("women's clothing")
                    : product.category === category
                )
                .map((product) => (
                  <div key={product.id} className="category__product">
                    <img src={product.image} alt={product.title} />
                    <div className="wrapper">
                      <div className="product__title">{product.title}</div>
                      <div className="product__price">
                        {"$"}
                        {product.price}
                      </div>
                      {/* <p>{product.description}</p> */}
                    </div>
                  </div>
                ))}
            </article>
          </section>
        ))}
      </div>
    </>
  );
}
