import { Link } from 'react-router-dom';
import './index.scss';

export default function PostList() {

  return (
    <div className="post__list">
      <div className="post__title-box">
        <div className="post__category">고객센터 게시판</div>
        <Link to="/csboard/new">
          <div className="post__category-write">글쓰기</div>
        </Link>
      </div>
      {[...Array(10)].map((e, index) => (
        <div className="post__box">
          <Link to={`/csboard/${index}`}>
            <div className="post__profile-box">
              <div className="post__profile" />
              <div className="post__user-name">@@@.naver.com</div>
              <div className="post__date">2023.10.29 일요일</div>
            </div>
            <div className="post__title">문의글 {index}</div>
            <div className="post__text">게시글 내용물입니다람쥐쥐</div>
            <div className="post__utils-box">
              <div className="post__delete">삭제</div>
              <div className="post__edit">수정</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
