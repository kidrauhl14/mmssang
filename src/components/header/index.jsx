import React from 'react'
import {Link} from "react-router-dom";
import {BsCartCheck} from 'react-icons/bs'
import { CgProfile } from "react-icons/cg"
import '../header/index.scss'
import DarkImg from "../../assets/dark.png"

export default function Header() {

  // const handleDark = () => {

  // };

  return (
    <header className='header'>
      <h1>mmssang</h1>
      <div className="categories">
        <a href="" className="category">
          패션
        </a>
        <a href="" className="category">
          액세서리
        </a>
        <a href="" className="category">
          디지털
        </a>
      </div>
      <div className="icons">
        {/* <button type="button" className="dark" onClick={handleDark}>
          <DarkImg />
        </button> */}
        <div className="dropdown">
          <input type="text" placeholder="검색" className="search" value="" />
        </div>
        <Link to={`/cart`}>
          <BsCartCheck />
        </Link>
        <Link to={`/mypage`}>
          <div className="mypage">
            <CgProfile />
          </div>
        </Link>
      </div>
    </header>
  );
}
