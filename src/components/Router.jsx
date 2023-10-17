import {Route, Routes, Navigate} from "react-router-dom";
import Home from "../pages/home";
import LogIn from "../pages/login";
import SignUp from "../pages/signup";
import MyPage from "../pages/mypage";
import Category from "../pages/category";
import Product from "../pages/product";
import Cart from "../pages/cart";
import Scrap from "../pages/scrap";
import CsBoard from "../pages/csboard";
import CsBoardDetail from "../pages/csboard_detail";
import CsBoardWrite from "../pages/csboard_write";

export default function Router() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage/:id" element={<MyPage />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/scrap" element={<Scrap />} />
          <Route path="/csboard" element={<CsBoard />} />
          <Route path="/csboard/:id" element={<CsBoardDetail />} />
          <Route path="/csboard/new" element={<CsBoardWrite />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    </>
  );
}
