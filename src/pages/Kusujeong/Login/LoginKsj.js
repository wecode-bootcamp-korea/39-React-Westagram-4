import React, { useState } from 'react';
import './LoginKsj.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function LoginKsj() {
  const [value, setValue] = useState({
    id: '',
    pw: '',
  });
  const [opacity, setOpacity] = useState('0.5');
  const [isAbled, setIsAbled] = useState(false);

  const navigate = useNavigate();
  const goToNext = () => {
    isAbled ? navigate('/main') : alert('입력하신 정보를 다시 확인해주세요');
  };

  const saveUserValue = e => {
    const name = e.target.name;
    setValue({ ...value, [name]: e.target.value });
  };
  const setAbled = () => {
    value.id.includes('@') && value.pw.length > 5
      ? setIsAbled(true)
      : setIsAbled(false);
  };

  const setBtnOpacity = () => {
    value.id.includes('@') && value.pw.length > 5
      ? setOpacity('1')
      : setOpacity('0.5');
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
            onChange={e => {
              saveUserValue(e);
              setAbled();
              setBtnOpacity();
            }}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="inputinfo"
            id="inputPw"
            name="pw"
            type="password"
            onChange={e => {
              saveUserValue(e);
              setAbled();
              setBtnOpacity();
            }}
            placeholder="비밀번호"
          />
          <button
            type="submit"
            className="inputinfo btn"
            id="login-btn"
            disabled={isAbled}
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
