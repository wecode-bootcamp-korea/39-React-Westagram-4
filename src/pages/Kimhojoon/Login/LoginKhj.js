import React from 'react';
import './LoginKhj.scss';

export default function LoginKhj() {
  return (
    <div class="container">
      <div class="westagram">Westagram</div>
      <div class="userinfo">
        <div class="id">
          <input
            class="inputid"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div class="password">
          <input class="inputpassword" type="password" placeholder="비밀번호" />
        </div>
      </div>

      <button class="loginbutton" type="button" disabled>
        로그인
      </button>
      <div class="forget">
        <a href="https://www.instagram.com/accounts/password/reset/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}
