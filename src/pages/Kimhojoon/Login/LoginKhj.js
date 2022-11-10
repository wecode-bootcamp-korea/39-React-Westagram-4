import React, { useState } from 'react';
import './LoginKhj.scss';
import { useNavigate } from 'react-router-dom';

export default function LoginKhj() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const saveUserId = e => {
    setIdValue(e.target.value);
  };
  const saveUserPw = e => {
    setPwValue(e.target.value);
  };

  const goToMain = () => {
    fetch('http://10.58.52.227:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패!');
      })
      .catch(error => console.log(error))
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          alert('로그인 성공');
          navigate('/MainKhj');
        } else if (data.message === 'INVALIDU_USER_ID') {
          alert('아이디 혹은 비밀번호를 확인 해 주세요');
        }
      });
  };

  return (
    <div className="container">
      <div className="westagram">Westagram</div>
      <div className="userinfo">
        <div className="id2">
          <input
            className="inputid"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
        </div>
        <div className="password">
          <input
            className="inputpassword"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
            // onKeyUp={enter} 활성화가 안되어잇어도 엔터누르면 넘어감
          />
        </div>
      </div>

      <button
        className="loginbutton"
        onClick={goToMain}
        type="button"
        disabled={idValue.includes('@') && pwValue.length >= 5 ? false : true}
      >
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
