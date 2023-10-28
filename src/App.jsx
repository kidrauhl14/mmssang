import {useEffect, useState} from "react";
import { app } from "./firebaseApp";
import { getAuth} from "firebase/auth";
// import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/Layout";
import Router from "./components/Router";

function App() {
  const auth = getAuth(app);
  console.log(auth);

  // auth를 체크하기 전에 (initialize 전)에는 loader를 띄워주는 용도
  const [init, setInit] = useState(false);

  // firebase Auth가 인증되었으면, authenticated로 변경
  // currentUser 초기값: auth에 currentUser값이 있으면 true/ 없으면 false
  // const [user, setUser] = useState(auth.currentUser);
  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   !!auth.currentUser
  // );


  // firebase Auth가 인증되었으면, user로 설정
  // currentUser 초기값: auth에 currentUser값이 있으면 해당 user 객체/ 없으면 null
  const user = auth.currentUser;


  useEffect(()=>{
    setInit(true);
  },[]);
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       //currentUser가 있다면
  //       setIsAuthenticated(true);
  //     } else {
  //       //currentUser가 없다면
  //       setIsAuthenticated(false);
  //     }
  //     setInit(true);
  //   });
  // }, [auth]);

  return (
    <>
      <Layout>
        <ToastContainer />
        {init ? <Router user={user} /> : "loading..."}
      </Layout>
    </>
  );
}

export default App;
