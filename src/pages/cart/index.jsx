import React from 'react'
import {useSelector} from 'react-redux';
import "./index.scss";
import { AwesomeButton } from "react-awesome-button";

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems);

  return (
    <div className="cartlist__wrapper">
      <h2>장바구니 목록</h2>
      <section>
        <ul className="cartlist">
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              상품명: {item.title} 가격: ${item.price}
            </li>
          ))}
        </ul>
      </section>
      <div className="total__wrapper">
        <div className="total__price">총 $</div>
        <AwesomeButton type="primary" className="buy__btn">
          구매하기
        </AwesomeButton>
      </div>
    </div>
  );
}
