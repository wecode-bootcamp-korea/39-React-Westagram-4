import React from 'react';
import './LoginPmy.scss';
import { Link } from 'react-router-dom';

export default function LoginPmy() {
  return (
    <div className="loginWrap">
      <div className="loginArea">
        {/* <h1 className="logo"><a href="">instagram</a></h1> */}
        <h1 className="logo">
          <Link to="/signup">westagram</Link>
        </h1>
        <div className="inputDataArea">
          <div className="loginFormBox">
            <input
              className="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div className="loginFormBox">
            <input className="userPw" type="password" placeholder="비밀번호" />
          </div>
          <button className="btnLogin" disabled="disabled">
            로그인
          </button>
        </div>

        <Link to="/main" className="forgotPw">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </div>
  );
}
