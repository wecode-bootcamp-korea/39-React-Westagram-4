import React, { useState } from 'react';
import './LoginKsj.scss';
import { useNavigate } from 'react-router-dom';

export default function LoginKsj() {
  const [value, setValue] = useState({
    id: '',
    pw: '',
  });

  const saveUserValue = e => {
    const name = e.target.name;
    const targetValues = { ...value, [name]: e.target.value };
    setValue(targetValues);
  };
  // 렌더링이 한 싸이클이 돌고 나서 저장된 value를 가져오기때문에 저장된 value.id, value.pw를 쓰지 않고 saveUserValue에서 e.target.value 값들을 파라미터로 받아서 바로 사용한다.
  const isValidate =
    value.id.includes('@') && value.pw.length > 5 ? true : false;
  const opacity = isValidate ? '1' : '0.5';

  const navigate = useNavigate();
  const goToNext = () => {
    isValidate
      ? navigate('/mainksj')
      : alert('입력하신 정보를 다시 확인해주세요');
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
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="inputinfo"
            id="inputPw"
            name="pw"
            type="password"
            onChange={saveUserValue}
            placeholder="비밀번호"
          />
          <button
            type="submit"
            className="inputinfo btn"
            id="login-btn"
            disabled={isValidate}
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
