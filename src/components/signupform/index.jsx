import "./index.scss";
import { toast } from "react-toastify";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log("회원가입 및 자동 로그인 성공:", user);
        toast.success("회원가입 성공!");
        navigate("/");
      })
      .catch((err) => {
        console.log("회원가입 실패:", err);
        toast.error("회원가입 실패");
        toast.error(err.code);
      });
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
      //이메일주소의 유효성 검사 (정규표현식 사용)
      const validRegex =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

      if (!validRegex.test(value)) {
        setError("이메일 형식이 올바르지 않습니다.");
      } else {
        setError("");
      }
    }

    if (name === "password") {
      setPassword(value);

      if (value.length < 8) {
        setError("비밀번호는 8자리 이상으로 입력해주세요");
      } else if (passwordConfirm.length > 0 && value !== passwordConfirm) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
      } else {
        setError("");
      }
    }

    if (name === "passwordConfirm") {
      setPasswordConfirm(value);

      if (value.length < 8) {
        setError("비밀번호는 8자리 이상으로 입력해주세요");
      } else if (value !== password) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
      } else {
        setError("");
      }
    }

    console.log(name, value);
  };

  return (
    <div className="signupWrapper">
      <form onSubmit={onSubmit} className="form form--lg">
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
            onChange={onChange}
          />
        </div>
        <div className="form__block">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password (비밀번호는 8자리 이상!)"
            required
            onChange={onChange}
          />
        </div>
        <div className="form__block">
          <input
            type="password"
            name="passwordConfirm"
            id="password"
            placeholder="Please type your password again"
            required
            onChange={onChange}
          />
        </div>
        {error && error.length > 0 && (
          <div className="form__block">
            <div className="form__error">{error}</div>
          </div>
        )}
        <div className="form__block">
          <input
            type="submit"
            value="Sign Up"
            className="form__btn--submit"
            disabled={error.length > 0}
          />
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
