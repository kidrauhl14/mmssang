// 고객센터게시판 글쓰기 페이지
import React from 'react'
import './index.scss';

export default function CsBoardWrite() {
  return (
    <>
      <h2 className='ask'> 문의하기</h2>
      <form action="/post" method="POST" className="form">
        <div className="form__block">
          <label htmlFor="title">제목</label>
          <input type="text" name="title" id="title" required />
        </div>
        <div className="form__block">
          <label htmlFor="content">내용</label>
          <textarea name="content" id="content" required />
        </div>
        <div className="form__block">
          <input type="submit" value="등록하기" className='form__btn--submit' />
        </div>
      </form>
    </>
  );
}
