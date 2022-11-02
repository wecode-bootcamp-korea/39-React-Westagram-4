import React from 'react';
import './LoginAsj.scss';

export default function LoginAsj() {
  return (
    <>
      {/* 부모 로그인 클래스 페이지 */}
      <div className="login-page">
        {/* 1번째 자식 클래스 메인 로그인 박스  */}
        <div className="main_login_box">
          {/* 2번째 자식 클래스 로고 박스 */}
          <div className="logo_box">
            {/* 3번째 자식 아이디 위스타그램 텍스트 */}
            <p id="westagram_text">Westagram</p>
          </div>
          {/* 2번째 자식 클래스 로그인 박스 */}
          <div className="login_box">
            {/* 3번째 자식 클래스 로그인 박스 a */}
            <div className="login_box_a" id="login_box_id">
              <label htmlFor="signUp" />
              {/* 4번째 자식 클래스 사인업 박스 & 아이디 사인업 아이디 */}
              <input
                className="signup_box"
                id="sign_up_id"
                type="text"
                placeholder="전화번호,사용자 이름 또는 이메일"
              />
            </div>
            {/* 3번째 자식 클래스 로그인 박스 a */}
            <div className="login_box_a">
              <label htmlFor="pw" />
              {/* 4번째 자식 클래스 사인업 박스 */}
              <input
                className="signup_box"
                id="sign_up_pw"
                type="password"
                placeholder="비밀번호"
              />
            </div>
            {/* 3번째 자식 클래스 로그인 박스 a */}
            <div className="login_box_a">
              <label htmlFor="login_button" />
              {/* 4번째 자식 아이디 로그인 버튼 */}
              <button id="login_button">로그인</button>
            </div>
            {/* 3번재 자식 클래스 페이스북 로그인 */}
            <div className="facebook_login">
              <span>Facebook으로 로그인</span>
            </div>
          </div>
          {/* 2번째 자식 클래스 find password */}
          <div className="find_password">
            <p>비밀번호를 잊으셨나요?</p>
          </div>
        </div>
      </div>
    </>
  );
}
