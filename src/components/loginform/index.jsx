import React from 'react'
import {Link} from "react-router-dom"
import './index.scss'

export default function LoginForm() {
  return (
    <div className="loginWrapper">
      <form action="/post" method="POST" className="form form--lg">
        <h1 className="form__title"> 로그인</h1>
        <div className="form__block">
          <input type="email" name="email" id="email" placeholder="e-mail" required />
        </div>
        <div className="form__block">
          <input type="password" name="password" id="password" placeholder="password" required />
        </div>
        <div className="form__block">
          <input type="submit" value="Log in" className="form__btn--submit" />
        </div>
        <div className="form__block">
          <input
            type="submit"
            value="Google Log in"
            className="form__btn--google"
          />
        </div>
        <div className="form__block">
          {`Don't have an account?`}
          <Link to="/signup" className="form__link">
            Sign up
          </Link></div>
      </form>
    </div>
  );
}
