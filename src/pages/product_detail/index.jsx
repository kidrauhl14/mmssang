import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchProductById } from '../../api/productAPI';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './index.scss';

export default function ProductDetail() {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await fetchProductById(id);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [id]);
  
  return (
    <div className="detail__wrapper1">
      <img src={product.image} alt={product.title} />
      <div className="detail__wrapper2">
        <div className="title__wrapper">
          <h1>{product.title}</h1>
        </div>
        <div className="product__description">{product.description}</div>
        <div className="product__price">
          {"$"}
          {product.price}
        </div>
        <div className="btn__wrapper">
          <Link to={"/cart"}>
            <AwesomeButton type="primary" className="cart__btn">
              장바구니에 담기
            </AwesomeButton>
          </Link>
          <AwesomeButton type="secondary" className="buy__btn">
            구매하기
          </AwesomeButton>
        </div>
      </div>
    </div>
  );
}
