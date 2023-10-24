import React from 'react'
import {Link} from "react-router-dom"
import './index.scss'
export default function SignupForm() {
  return (
    <div className="signupWrapper">
      <form action="/post" method="POST" className="form form--lg">
        <h1 className="form__title"> 회원가입</h1>
        <div className="form__block">
          <input
            type="submit"
            value="Log in with Google!"
            className="form__btn--google"
          />
        </div>
        <div className="form__block">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e-mail"
            required
          />
        </div>
        <div className="form__block">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password (영문 소문자 + 숫자 조합, 총 8자리 이상)"
            required
          />
        </div>
        <div className="form__block">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Please type your password again"
            required
          />
        </div>
        <div className="form__block">
          <input type="submit" value="Log in" className="form__btn--submit" />
        </div>
        <div className="form__block">
          {`Have an account?`}
          <Link to="/login" className="form__link">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}
