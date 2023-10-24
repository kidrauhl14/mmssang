import {useState} from "react";
import { app } from "./firebaseApp";
import { getAuth } from "firebase/auth";

import Layout from "./components/Layout";
import Router from "./components/Router";


function App() {
  const auth = getAuth(app);
  console.log(auth);

  // firebase Auth가 인증되었으면, true로 변경해주는 로직 추가
  // currentUser 초기값: auth에 currentUser값이 있으면 true/ 없으면 false
  const [isAuthenticated, setIsAuthenticated] = useState(
    auth && auth.currentUser
  );

  return (
    <>
      <Layout>
        <Router isAuthenticated={isAuthenticated} />
      </Layout>
    </>
  );
}

export default App;
