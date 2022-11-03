import React from 'react';
import './Nav.scss';

export default function Nav() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">Westagram</div>
        <div className="container-search">
          <i className="fa-solid fa-magnifying-glass search-icon" />
          <input className="search" placeholder="검색" />
          <div className="searchContainer">
            <ul id="searchList" />
          </div>
        </div>
        <ul className="menu">
          <li className="menu-item">
            <i className="fa-solid fa-house" />
          </li>
          <li className="menu-item">
            <i className="fa-regular fa-paper-plane" />
          </li>
          <li className="menu-item">
            <i className="fa-regular fa-square-plus" />
          </li>
          <li className="menu-item">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="탐색"
              width="20px"
              height="20px"
            />
          </li>
          <li className="menu-item">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="좋아요"
              width="20px"
              height="20px"
            />
          </li>
          <li className="menu-item">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="마이페이지"
              width="20px"
              height="20px"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
