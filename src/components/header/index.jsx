import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import {app} from "../../firebaseApp";
// import {getStorage, ref, deleteObject} from "firebase/storage";
import { useContext } from "react";

import { BsFillCartCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg"
import '../header/index.scss'
import DarkImg from "../../assets/dark.png"
import { toast } from 'react-toastify';
import { fetchAllProducts } from '../../api/productAPI';

import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  isEnabled as isDarkReaderEnabled,
} from "darkreader";

export default function Header() {

  // const storage = getStorage();

  const navigate = useNavigate();

  const [isDarkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    
    if (isDarkMode) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    } else {
      disableDarkMode();
    }
  }, [isDarkMode]);
  

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const {user, setUser} = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(user);

    const onSignout = async () => {
      try {
        const auth = getAuth();
        user.delete();
        await signOut(auth);
        // toast.success("로그아웃 성공!");
        setUser(null);
      } catch (error) {
        console.log(error);
        toast.error(error.code);
      }
    };

    useEffect (() => {
      const fetchProducts = async() => {
        const fetchedProducts = await fetchAllProducts();
        setProducts(fetchedProducts);
      };
      fetchProducts();
    }, []);

    const handleKeyDown = (e) => {
      if(e.key === 'Enter'){
        const product = products.find(
          (data) =>
            data.title.toLowerCase().replace(/\s/g, "") ===
            searchTerm.toLowerCase().replace(/\s/g, "")
        );

        // product가 존재하고, searchTerm이 비어있지 않은 경우에만 이동한다.
        // trim 메서드: 문자열의 양 끝에 있는 공백(스페이스, 탭, 개행 문자 등)을 제거
        // 그러므로, 검색어가 공백만으로 이루어진 경우(빈 경우)에는, navigate가 불가하게 된다.
        if (product && searchTerm.trim !== "") {
          navigate(`/product/${product.id}`);
          setSearchTerm("");
        }
      }
    };

  return (
    <header className="header">
      <Link to="/" className="link">
        <h1>mmssang</h1>
      </Link>
      <div className="categories">
        <div className="header__category">
          <a href="/category/clothing" className="link">
            패션
          </a>
        </div>
        <div className="header__category">
          <a href="/category/jewelery" className="link">
            액세서리
          </a>
        </div>
        <div className="header__category">
          <a href="/category/electronics" className="link">
            디지털
          </a>
        </div>
        <div className="header__category">
          <a href="/csboard" className=" link">
            고객센터
          </a>
        </div>
      </div>
      <div className="icons">
        <div className="dropdown">
          <input
            type="text"
            placeholder="검색어 입력 후, 엔터키"
            className="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button type="button" className="dark__btn" onClick={toggleDarkMode}>
          <img src={DarkImg} />
        </button>

        <Link to={`/cart`}>
          <button style={{ fontSize: "30px", color: "purple"}}>
            <BsFillCartCheckFill />
          </button>
        </Link>
        {/* <Link to={`/mypage`}>
          <div className="mypage">
            <CgProfile />
          </div>
        </Link> */}
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
