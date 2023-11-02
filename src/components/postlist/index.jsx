import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import {db} from "../../firebaseApp";
import {useContext, useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './index.scss';
import AuthContext from "../../context/AuthContext";
import {toast} from "react-toastify";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  // context를 가져와서, 현재 유저의 email과 같은지 비교
  const {user} = useContext(AuthContext);

  const getPosts = async () => {
    const datas = await getDocs(collection(db, "posts"));
    console.log(datas);

    datas.forEach((doc) => {
      const dataObj = {...doc.data(), id:doc.id};
      setPosts((prev) => [...prev, dataObj])
    });
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("게시글을 진짜로 삭제하시겠습니까?");
    if(confirm && id) {
      await deleteDoc(doc(db,"posts", id));

      toast.success("삭제 성공!");
    }
  }

  useEffect(()=>{
    getPosts();  
  },[]);

  return (
    <div className="post__list">
      <div className="post__title-box">
        <div className="post__category">고객센터 게시판</div>
        {/* user에 값이 있으면, csboard/new로 가게하고, 아니면 로그인으로 가게한다 */}
        <Link to="/csboard/new">
          <div className="post__category-write">글쓰기</div>
        </Link>
      </div>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="post__box">
            <Link to={`/csboard/${post.id}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__user-name">{post.email}</div>
                <div className="post__date">{post.createdAt}</div>
              </div>
              <div className="post__title">{post.title}</div>
              <div className="post__text">{post.content}</div>
            </Link>
            {user && post.email === user.email && (
              <div className="post__utils-box">
                <div className="post__delete" onClick={handleDelete}>
                  삭제
                </div>
                <div className="post__edit">수정</div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="post__none">게시글이 없습니다.</div>
      )}
    </div>
  );
}
