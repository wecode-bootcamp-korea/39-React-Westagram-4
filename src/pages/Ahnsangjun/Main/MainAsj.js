import React from 'react';
import './MainAsj.scss';

export default function MainAsj() {
  return (
    <div className="container">
      {/* <!-- 네비 컨테이너 --> */}
      <div className="nav_container">
        <div className="nav_left">
          <i className="fab fa-instagram" />
          <div className="bar">|</div>
          <div className="instagram-logo">westagram</div>
        </div>

        {/* <!-- 검색바 --> */}
        <div className="search-container">
          <div className="search-bar">
            <i className="fas fa-search" />
            <input
              className="search-bar__input"
              type="search"
              placeholder="검색"
            />
          </div>
        </div>

        <div className="nav_right">
          <i className="far fa-compass fa-lg" />
          <i className="far fa-heart nav__icon fa-lg">
            <span className="heart_notification" />
          </i>
          <i className="far fa-user fa-lg" />
        </div>
      </div>

      {/* <!-- 메인섹션 --> */}
      <section className="main_section">
        {/* <!-- 섹션 1 --> */}
        <div className="section_1">
          <div className="user">
            <img className="user__id__img" src="img/mypic.jpg" />
            <p className="user__id">dave_ahn93</p>
          </div>
          <img className="cat__img" src="img/moon.jpg" />

          {/* <!-- 아래 박스 --> */}
          <div className="bottombox">
            <div className="bottombox__icons">
              <div className="bottombox__icons__left">
                <i className="far fa-heart fa-lg" />
                <i className="far fa-comment fa-lg" />
                <i className="fa-regular fa-share-from-square fa-lg" />
              </div>
              <div className="bottombox__icons__right">
                <i className="far fa-bookmark fa-lg" />
              </div>
            </div>

            {/* <!-- 좋아요 박스 --> */}
            <div className="bottombox__likes">
              <div className="bottombox__likes__first">
                <img className="dave__img" src="img/mypic.jpg" />
                <p className="bottombox__likes__second">Liked by</p>
                <p className="bottombox__likes__id">dave_ahn93</p>
                <p className="bottombox__likes__thrid">and</p>
                <p className="bottombox__likes__fourth">300 others</p>
              </div>
              <div className="contents">
                <div className="contents__id">dave_ahn93</div>
                <div className="contents__content">달</div>
              </div>
              <div className="comments" />
              <div className="time">1 HOUR AGO</div>
              <ul className="comments__list" />

              {/* <!-- 댓글창 --> */}
              <div className="write">
                <div className="inner">
                  <i className="fa-regular fa-face-smile" />

                  <form onsubmit="return false" className="comment__form">
                    <input
                      className="write__input"
                      placeholder="Add a comment..."
                    />

                    <button className="post">post</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- 섹션 2 --> */}
        <div className="section_2">
          <div className="my__id__box">
            <img className="my__id" src="img/mypic.jpg" />
            <p className="my__id__name">dave_ahn93</p>
          </div>

          {/* <!-- 스토리 & 제안 박스 --> */}
          <div className="story__box">
            <div className="story__box__top">
              <p className="story">story</p>
              <p className="story__see__all">See All</p>
            </div>

            {/* <!-- 스토리 박스 --> */}
            <div className="story__profile">
              {/* <!-- 친구 ID 1 --> */}
              <div className="flower__box">
                <div className="flower__border">
                  <img className="flower" src="img/flower.jpeg" />
                </div>
                <div className="flower__border__info">
                  <p className="flower__border__id">abc_efg</p>
                  <p className="flower__suggested__for__you">
                    suggested for you
                  </p>
                </div>
                <div className="flower__follow">Follow</div>
              </div>

              {/* <!-- 친구 ID 2 --> */}
              <div className="macaron__box">
                <div className="macaron__border">
                  <img className="macaron" src="img/macaron.jpeg" />
                </div>
                <div className="macaron__border__info">
                  <p className="macaron__border__id">hij_klm</p>
                  <p className="macaron__suggested__for__you">
                    suggested for you
                  </p>
                </div>
                <div className="macaron__follow">Follow</div>
              </div>

              {/* <!-- 친구 ID 3 --> */}
              <div className="puppy__box">
                <div className="puppy__border">
                  <img className="puppy" src="img/puppy.jpeg" />
                </div>
                <div className="puppy__border__info">
                  <p className="puppy__border__id">opq_rhgi</p>
                  <p className="puppy__suggested__for__you">
                    suggested for you
                  </p>
                </div>
                <div className="puppy__follow">Follow</div>
              </div>
            </div>
          </div>

          {/* <!-- 제안 박스 --> */}
          <div className="suggestions__box">
            <div className="suggestions__box__top">
              <p className="for__you">suggestions For You</p>
              <p className="suggestions__see__all">See All</p>
            </div>
          </div>

          {/* <!-- 회사 설명 --> */}
          <p className="info">About·Help·Press·API·Jobs·Privacy·Terms·</p>
          <p className="info2">Location·Language</p>
          <p className="copyright">ⓒ 2022 INSTAGRAM FROM META</p>
        </div>
      </section>
    </div>
  );
}
