import React, { useState } from 'react';
import './LoginPmy.scss';
import { Link } from 'react-router-dom';

export default function LoginPmy() {
  return (
    <div className="loginWrap">
      <div className="loginArea">
        {/* <h1 className="logo"><a href="">instagram</a></h1> */}
        <HeadingTag1 />

        <InputDataArea />

        <Link to="/main" className="forgotPw">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </div>
  );
}

function HeadingTag1() {
  return (
    <h1 className="logo">
      <Link to="/signup">westagram</Link>
    </h1>
  );
}

function InputDataArea() {
  let [isIdValue, setIdValue] = useState();

  function saveUserId(e) {
    isIdValue = e.target.value;
    console.log({ isIdValue });
  }

  let [isPwValue, setPwValue] = useState();

  function saveUserPw(e) {
    isPwValue = e.target.value;
    console.log({ isPwValue });
  }

  return (
    <div className="inputDataArea">
      <div className="loginFormBox">
        <input
          className="userId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserId}
        />
      </div>
      <div className="loginFormBox">
        <input
          className="userPw"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
        />
      </div>
      <button className="btnLogin" disabled="disabled">
        로그인
      </button>
    </div>
  );
}
