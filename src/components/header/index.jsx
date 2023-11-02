import React, {useState} from 'react'
import {Link} from "react-router-dom";

import AuthContext from '../../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import {app} from "../../firebaseApp";
import { useContext } from "react";

import {BsCartCheck} from 'react-icons/bs'
import { CgProfile } from "react-icons/cg"
import '../header/index.scss'
import DarkImg from "../../assets/dark.png"
import { toast } from 'react-toastify';

export default function Header() {

  const {user, setUser} = useContext(AuthContext);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleDark = () => {

  // };

    const onSignout = async () => {
      try {
        const auth = getAuth();
        await signOut(auth);
        // toast.success("로그아웃 성공!");
        setUser(null);
      } catch (error) {
        console.log(error);
        toast.error(error.code);
      }
    };

  return (
    <header className="header">
      <Link to="/" className="link">
        <h1>mmssang</h1>
      </Link>
      <div className="categories">
        <div className="category">
          <a href="" className="link">
            패션
          </a>
        </div>
        <div className="category">
          <a href="" className="link">
            액세서리
          </a>
        </div>
        <div className="category">
          <a href="" className="link">
            디지털
          </a>
        </div>
        <div className="category">
          <a href="/csboard" className=" link">
            고객센터
          </a>
        </div>
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
        {user ? (
          <>
            <div className="profile__email">{user.email}님, 안녕하세요!</div>
            <div className="signout" onClick={onSignout}>
              로그아웃하기
            </div>
          </>
        ) : (
          <Link to="/login" className="link">
            <span>로그인하기</span>
          </Link>
        )}
      </div>
    </header>
  );
}
