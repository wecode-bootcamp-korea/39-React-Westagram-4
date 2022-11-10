import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginKsj.scss';

export default function LoginKsj() {
  const [value, setValue] = useState({
    id: '',
    pw: '',
  });
  // const [backData, setBackData] = useState({});

  const saveUserValue = e => {
    const { name, value: newValue } = e.target;
    const targetValues = { ...value, [name]: newValue };
    setValue(targetValues);
  };
  const isValidate =
    value.id.includes('@') && value.pw.length > 5 ? true : false;

  const opacity = isValidate ? '1' : '0.5';

  const navigate = useNavigate();
  const goToNext = e => {
    if (e.key === 'Enter' || e.target.nodeName === 'BUTTON') {
      // backend 통신
      // fetch('http://10.58.52.147:3000/auth/signin', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json;charset=utf-8' },
      //   body: JSON.stringify({ email: value.id, password: value.pw }),
      // })
      //   .then(response => response.json())
      //   .then(result => {
      //     console.log('fetch response data ', result);
      //     setBackData(result);
      //     if (result.accessToken !== null && result.accessToken !== '') {
      //       localStorage.setItem('idKey', JSON.stringify(result.accessToken));
      //       navigate('/mainksj');
      //     }
      //   });

      isValidate
        ? navigate('/mainksj')
        : alert('입력하신 정보를 다시 확인해주세요');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Westagram</h1>
      <div className="loginContainer">
        <form className="inputInfo" action="">
          <input
            className="inputinfo"
            id="inputId"
            name="id"
            type="text"
            onChange={saveUserValue}
            // onKeyUp={goToNext}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="inputinfo"
            id="inputPw"
            name="pw"
            type="password"
            onChange={saveUserValue}
            // onKeyUp={goToNext}
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
