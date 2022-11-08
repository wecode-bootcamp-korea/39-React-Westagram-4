import React, { useState } from 'react';
import './LoginKhj.scss';
import { useNavigate } from 'react-router-dom';
import { isDisabled } from '@testing-library/user-event/dist/utils';

export default function LoginKhj() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/MainKhj');
  };

  const [idValue, setIdValue] = useState('');
  const saveUserId = e => {
    setIdValue(e.target.value);
  };

  const [pwValue, setPwValue] = useState('');
  const saveUserPw = e => {
    setPwValue(e.target.value);
  };

  // const enter = e => {
  //   if (e.code == 'Enter') {
  //     goToMain();
  //   }
  // };

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
