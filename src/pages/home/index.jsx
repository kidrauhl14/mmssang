// HomePage 컴포넌트는 fetchAllProducts 함수를 호출하여 서버에서 상품 데이터를 불러옵니다. 
// 그리고 이 데이터를 setAllProducts 액션을 발생시켜 Redux 스토어에 저장합니다. 
//이렇게 저장된 상품 데이터는 이후에 상품 목록을 렌더링하는 데 사용됩니다.
import React, {useEffect, useState} from 'react';
import { EmblaCarousel } from '../../components/carousel'
import { fetchAllProducts } from '../../api/productAPI';
import Product from '../../components/product';
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
                  <Product key={product.id} product={product}/>
                ))}
            </article>
          </section>
        ))}
      </div>
    </>
  );
}
