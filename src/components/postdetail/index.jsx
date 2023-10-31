import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../../firebaseApp";
import './index.scss';


export default function PostDetail() {

  const [post, setPost] = useState(null);
  const params = useParams();
  console.log(params);
  console.log(params.id);

  const getPost = async (id) => {
    if(id) {
      const docRef = doc(db, 'posts', id);
      const docSnap = await getDoc(docRef);

      setPost({id: docSnap.id, ...(docSnap.data())})
    }
  };

  console.log(post);

  useEffect(()=>{
    if(params.id) getPost(params.id);
  },[params.id]);

  return (
    <div className="detail__box">
      <div className="detail__title">제목이다</div>
      <div className="detail__profile-box">
        <div className="detail__profile"></div>
        <div className="detail__user-name">kidrauhl@naver.com</div>
        <div className="detail__date">2023.10.30</div>
      </div>
      <div className="detail__utils-box">
        <div className="detail__delete">삭제</div>
        <div className="detail__edit">수정</div>
      </div>
      <div className="detail__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        perferendis beatae! Esse placeat perferendis tempore in corrupti, culpa
        totam perspiciatis ipsam rem magnam, ratione exercitationem maiores quis
        temporibus quo veritatis.
      </div>
    </div>
  );
}

