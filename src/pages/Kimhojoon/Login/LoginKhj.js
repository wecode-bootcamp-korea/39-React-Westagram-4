import React from 'react';
import './LoginKhj.scss';

export default function LoginKhj() {
  return (
    <div className="container">
      <div className="westagram">Westagram</div>
      <div className="userinfo">
        <div className="id2">
          <input
            className="inputid"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div className="password">
          <input
            className="inputpassword"
            type="password"
            placeholder="비밀번호"
          />
        </div>
      </div>

      <button className="loginbutton" type="button" disabled>
        로그인
      </button>
      <div className="forget">
        <a href="https://www.instagram.com/accounts/password/reset/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}
