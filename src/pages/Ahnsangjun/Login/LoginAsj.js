import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginAsj.scss';

export default function LoginAsj() {
  const [id, getId] = useState('');
  const [pw, getPw] = useState('');

  const idValue = e => {
    getId(e.target.value);
  };

  const pwValue = e => {
    getPw(e.target.value);
  };

  let loginIdPw = id.indexOf('@') !== -1 && pw.length >= '5';
  return (
    <div className="login-page">
      <div className="main_login_box">
        <div className="logo_box">
          <p id="westagram_text">Westagram</p>
        </div>

        <div className="login_box">
          <div className="login_box_a">
            <input
              className="signUpBox"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
              onChange={idValue}
            />
          </div>
          <div className="login_box_a">
            <input
              className="signUpBox"
              type="password"
              placeholder="비밀번호"
              onChange={pwValue}
            />
          </div>
          <div className="login_box_a">
            <label htmlFor="login_button" />
            <Link to="MainAsj">
              <button
                className={loginIdPw ? 'rightValue' : 'wrongValue'}
                disabled={loginIdPw !== true}
              >
                로그인
              </button>
            </Link>
          </div>
          <div className="facebook_login">
            <span>Facebook으로 로그인</span>
          </div>
        </div>
        <div className="find_password">
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    </div>
  );
}
