import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebaseApp";
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './index.scss';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const datas = await getDocs(collection(db, "posts"));
    console.log(datas);

    datas.forEach((doc) => {
      const dataObj = {...doc.data(), id:doc.id};
      setPosts((prev) => [...prev, dataObj])
    });
  };

  console.log(posts);

  useEffect(()=>{
    getPosts();  
  },[]);

  return (
    <div className="post__list">
      <div className="post__title-box">
        <div className="post__category">고객센터 게시판</div>
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
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="post__none">게시글이 없습니다.</div>
      )}
    </div>
  );
}
