import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import {deleteDoc, doc, getDoc} from "firebase/firestore";
import { db } from "../../firebaseApp";
import {toast} from "react-toastify";
import './index.scss';


export default function PostDetail() {

  const [post, setPost] = useState(null);
  const params = useParams();
  console.log(params);
  console.log(params.id);

  const navigate = useNavigate();

  const getPost = async (id) => {
    if(id) {
      //getDoc이라는 Firestore메서드를 사용해, 하나의 document를 특정하여 가져옴
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      // id에 따라 해당 데이터를 보여줌
      setPost({ id: docSnap.id, ...docSnap.data() });
    }
  };

 const handleDelete = async () => {
  const confirm = window.confirm("진짜 삭제해요?");
  if(confirm && post && post.id){
    await deleteDoc(doc(db, "posts", post.id));
    toast.success("삭제 성공!");
    console.log("yes");
    navigate("/csboard");
  }
 }

  useEffect(()=>{
    if(params.id) getPost(params.id);
  },[params.id]);

  return (
    <>
      {post ? (
        <div className="detail__box">
          <div className="detail__title">{post.title}</div>
          <div className="detail__profile-box">
            <div className="detail__profile"></div>
            <div className="detail__user-name">{post.email}</div>
            <div className="detail__date">{post.createdAt}</div>
          </div>
          <div className="detail__utils-box">
            <div className="detail__delete" onClick={handleDelete}>삭제</div>
            <div className="detail__edit">수정</div>
          </div>
          <div className="detail__text">
            {post.content}
          </div>
        </div>
      ) : (
        <div>로딩중입니당</div>
      )}
    </>
  );
}

