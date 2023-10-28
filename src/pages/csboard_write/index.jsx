// 고객센터게시판 글쓰기 페이지
import {useContext, useState} from "react";
import {collection, addDoc} from "firebase/firestore";
import { db } from '../../firebaseApp';
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import "./index.scss";

export default function CsBoardWrite() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (e)=>{
    e.preventDefault();

    try {
      // Firestore로 데이터 생성
      await addDoc(collection(db, "posts"), {
        title: title,
        content: content.at,
        createAt: new Date()?.toLocaleDateString(),
        email: user.email,
      });

      toast.success("게시글을 생성했습니당~");
      navigate("/");
    } catch(e){
      console.log(e);
      toast.error(e.code);
    }
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if(name === "title"){
      setTitle(value);
    }
    if(name === "content"){
      setContent(value);
    }
  };

  return (
    <>
      <h2 className='ask'> 문의하기</h2>
      <form onSubmit={onSubmit} className="form">
        <div className="form__block">
          <label htmlFor="title">제목</label>
          <input type="text" name="title" id="title" required onChange={onChange} value={title}/>
        </div>
        <div className="form__block">
          <label htmlFor="content">내용</label>
          <textarea name="content" id="content" required onChange={onChange} value={content}/>
        </div>
        <div className="form__block">
          <input type="submit" value="등록하기" className='form__btn--submit' />
        </div>
      </form>
    </>
  );
}
