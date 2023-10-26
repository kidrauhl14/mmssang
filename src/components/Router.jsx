import {useState} from "react";

import {Route, Routes, Navigate} from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import MyPage from "../pages/mypage";
import Category from "../pages/category";
import Product from "../pages/product";
import Cart from "../pages/cart";
import Scrap from "../pages/scrap";
import CsBoard from "../pages/csboard";
import CsBoardDetail from "../pages/csboard_detail";
import CsBoardWrite from "../pages/csboard_write";

export default function Router(isAuthenticated) {

  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/scrap" element={<Scrap />} />
            <Route path="/csboard" element={<CsBoard />} />
            <Route path="/csboard/:id" element={<CsBoardDetail />} />
            <Route path="/csboard/new" element={<CsBoardWrite />} />
            <Route path="*" element={<Navigate replace to="/" />} />

            {/*isAuthenticated값이 true이면, LoginPage와 SignupPage는 안보여야 함*/}
            {/*근데 이 로직에 문제가 있는지, 해결이 안돼서 우선은 보이게 해놨음. */}
            {/*해결 시, 아래 2개의 경로는 지우면 됩니다. */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/csboard" element={<CsBoard />} />
            <Route path="/csboard/:id" element={<CsBoardDetail />} />
            <Route path="*" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
