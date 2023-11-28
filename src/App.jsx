import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import MyPage from "./pages/mypage";
import Category from "./pages/category";
import ProductDetail from "./pages/product_detail/index";
import Cart from "./pages/cart";
import Scrap from "./pages/scrap";
import CsBoard from "./pages/csboard";
import CsBoardDetail from "./pages/csboard_detail";
import CsBoardWrite from "./pages/csboard_write";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/scrap" element={<Scrap />} />
          <Route path="/csboard" element={<CsBoard />} />
          <Route path="/csboard/:id" element={<CsBoardDetail />} />
          <Route path="/csboard/new" element={<CsBoardWrite />} />
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
