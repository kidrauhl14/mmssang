import React from 'react'
import {useState} from "react";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import {app} from "../../firebaseApp";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import './index.scss'

export default function LoginForm() {

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth,email,password);

      toast.success("로그인 성공!")
    } catch(error){
      toast.error("로그인 실패!");
      toast.error(error.code);
    }
  };

  const onChange = (e) => {
    const {
      target: {name, value},
    } = e;

    if (name === "email"){
      setEmail(value);

      const validRegex =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        if(!validRegex.test(value)){
          setError("이메일 형식이 올바르지 않습니다람쥐");
        } else {
          setError("");
        }
    }

    if (name === "password"){
      setPassword(value);
      
      if(value.length < 8){
        setError("비밀번호는 8자리 이상으로 입력해주세요");
      } else {
        setError("");
      }
    } 
  }

  return (
    <div className="loginWrapper">
      <form onSubmit={onSubmit} className="form form--lg">
        <h1 className="form__title"> 로그인</h1>
        <div className="form__block">
          <input type="email" name="email" id="email" value={email} placeholder="e-mail" required onChange={onChange}/>
        </div>
        <div className="form__block">
          <input type="password" name="password" id="password" value={password} placeholder="password" required onChange={onChange} />
        </div>
        {error && error.length > 0 &&(
          <div className="form__block">
            <div className="form__error">{error}</div>
          </div>
        )}
        <div className="form__block">
          <input type="submit" value="Log in" className="form__btn--submit" disabled={error.length > 0}/>
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
