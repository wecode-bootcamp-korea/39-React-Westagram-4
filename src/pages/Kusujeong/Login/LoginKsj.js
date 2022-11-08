import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginKsj.scss';

export default function LoginKsj() {
  const [value, setValue] = useState({
    id: '',
    pw: '',
  });

  const saveUserValue = e => {
    const { name, value } = e.target;
    const targetValues = { ...value, [name]: value };
    setValue(targetValues);
  };
  const isValidate =
    value.id.includes('@') && value.pw.length > 5 ? true : false;
  const opacity = isValidate ? '1' : '0.5';

  const navigate = useNavigate();
  const goToNext = e => {
    if (e.key === 'Enter' || e.target.nodeName === 'BUTTON') {
      isValidate
        ? navigate('/mainksj')
        : alert('입력하신 정보를 다시 확인해주세요');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Westagram</h1>
      <div className="loginContainer">
        <form action="">
          <input
            className="inputinfo"
            id="inputId"
            name="id"
            type="text"
            onChange={saveUserValue}
            onKeyUp={goToNext}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="inputinfo"
            id="inputPw"
            name="pw"
            type="password"
            onChange={saveUserValue}
            onKeyUp={goToNext}
            placeholder="비밀번호"
          />
          <button
            type="submit"
            className="inputinfo btn"
            id="login-btn"
            disabled={!isValidate}
            style={{ opacity: opacity }}
            onClick={goToNext}
          >
            로그인
          </button>
        </form>
      </div>
      <a className="pwFinding" href="">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
}
