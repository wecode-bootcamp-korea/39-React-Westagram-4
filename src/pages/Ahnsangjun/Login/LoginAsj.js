import React, { useState } from 'react';
import './LoginAsj.scss';
import { useNavigate } from 'react-router-dom';

export default function LoginAsj() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const idValue = e => {
    setId(e.target.value);
  };

  const pwValue = e => {
    setPassword(e.target.value);
  };

  const [getData, setGetData] = useState('');
  console.log(getData);

  const loginSuccess = e => {
    fetch('http://10.58.52.147:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: id, password: password }),
    })
      .then(response => response.json()) //요청
      .then(data => {
        setGetData(data); //응답
        localStorage.setItem('idKey', JSON.stringify(data));
      });
    navigate('/mainasj');
  };

  let loginIdPw = id.indexOf('@') !== -1 && password.length >= '5';

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
            <button
              onClick={loginSuccess}
              className={loginIdPw ? 'rightValue' : 'wrongValue'}
              disabled={loginIdPw !== true}
            >
              로그인
            </button>
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
