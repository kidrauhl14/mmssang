import {useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../api/productAPI';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './index.scss';

export default function ProductDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // console.log(product);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await fetchProductById(id);
      setProduct(fetchedProduct);
      console.log(fetchedProduct);
    };

    fetchProduct();
  }, [id]);

  console.log("product", product);
  // '장바구니에 담기' 버튼을 누르면 'addItem' 액션을 디스패치
  // 이 액션은 현재 보고 있는 상품 정보를 payload로 가지게 됨 
  const handleAddToCart = () => {
    console.log("handleAddToCart버튼이 제대로 작동하는지 확인");
    console.log("dispatch할 때, product값이 제대로 들어가는지 확인",product);
    dispatch(addItem(product));
  };

  return (
    <div className="detail__wrapper1">
      <div className="detail__image__wrapper">
        <img src={product.image} alt={product.title} />
      </div>
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
          <div onClick={handleAddToCart}>
            <AwesomeButton
              type="primary"
              className="cart__btn"
              disabled={!product}
            >
              장바구니에 담기
            </AwesomeButton>
          </div>
          <AwesomeButton type="secondary" className="buy__btn">
            구매하기
          </AwesomeButton>
        </div>
      </div>
    </div>
  );
}
