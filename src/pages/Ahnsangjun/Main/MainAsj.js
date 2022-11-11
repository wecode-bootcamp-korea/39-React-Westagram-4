import React, { useState } from 'react';
import './MainAsj.scss';
import Comment from './Comment';
import CommentList from '../CommentList';

function MainAsj() {
  const [commentValue, setCommentValue] = useState('');

  const [commentList, setCommentList] = useState([]);

  const handleClickBtn = () => {
    const pushedComments = [...commentList, commentValue];
    setCommentList(pushedComments);
    setCommentValue('');
  };

  let btnLight = commentValue.length >= '1';

  // const [inputValue, setInputValue] = useState('');
  // const [commentList, setCommentList] = useState({});
  // const addItem = () => {
  //   setCommentList([...commentList, inputValue]);
  //   setInputValue('');
  // };

  return (
    <>
      {/* <!-- 컨테이너 --> */}
      <div className="container">
        {/* 네비 컨테이너 */}
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
          {/* <!-- section 1 --> */}
          <div className="section_1">
            <div className="user">
              <img
                className="user__id__img"
                src="/images/Ahnsangjun/mypic.jpg"
                alt="mypic"
              />

              <p className="user__id">dave_ahn93</p>
            </div>
            <img
              className="cat__img"
              src="/images/Ahnsangjun/moon.jpg"
              alt=""
            />

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
                  <img
                    className="dave__img"
                    src="/images/Ahnsangjun/mypic.jpg"
                    alt="mypic"
                    width="30px"
                  />
                  <p className="bottombox__likes__second">Liked by</p>
                  <p className="bottombox__likes__id">dave_ahn93</p>
                  <p className="bottombox__likes__thrid">and</p>
                  <p className="bottombox__likes__fourth">300 others</p>
                </div>
                <div className="contents">
                  <div className="contents__id">dave_ahn93</div>
                  <div className="contents__content">달</div>
                </div>

                {/* 댓글 */}

                {/* <div className="comment">
                  <input
                    value={inputValue}
                    type="text"
                    onChange={e => setInputValue(e.target.value)}
                  />
                  <button onClick={addItem}> 댓글 추가 </button>

                  <CommentList commentList={commentList} />
                </div> */}

                <div className="comments" />
                <div className="time">1 HOUR AGO</div>
                {/* 댓글 리스트 */}
                <ul className="comments__list" />
                <br />

                {/* 댓글 */}
                <div className="commentBox">
                  <ul>
                    {commentList.map((commentValue, index) => {
                      return <Comment comment={commentValue} key={index} />;
                    })}
                  </ul>
                </div>

                <div className="comments" />
                <div className="write">
                  <div className="inner">
                    <i className="fa-regular fa-face-smile" />
                    <div className="comment__form">
                      <form onSubmit={event => event.preventDefault()}>
                        <input
                          type="text"
                          value={commentValue}
                          className="write__input"
                          placeholder="Add a comment..."
                          onChange={e => setCommentValue(e.target.value)}
                        />

                        <button
                          onClick={handleClickBtn}
                          type="submit"
                          className={btnLight ? 'rightBtn' : 'wrongBtn'}
                        >
                          post
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- 섹션 2 --> */}
          <div className="section_2">
            <div className="my__id__box">
              <img
                className="my__id"
                src="/images/Ahnsangjun/mypic.jpg"
                alt="mypic"
              />
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
                    <img
                      className="flower"
                      src="/images/Ahnsangjun/purple.jpg"
                      alt="purple"
                    />
                  </div>
                  <div className="flower__border__info">
                    <p className="flower__border__id">purple</p>
                    <p className="flower__suggested__for__you">
                      suggested for you
                    </p>
                  </div>
                  <div className="flower__follow">Follow</div>
                </div>

                {/* <!-- 친구 ID 2 --> */}
                <div className="macaron__box">
                  <div className="macaron__border">
                    <img
                      className="macaron"
                      src="/images/Ahnsangjun/mycat.jpg"
                      alt="mycat"
                    />
                  </div>
                  <div className="macaron__border__info">
                    <p className="macaron__border__id">bang_wool</p>
                    <p className="macaron__suggested__for__you">
                      suggested for you
                    </p>
                  </div>
                  <div className="macaron__follow">Follow</div>
                </div>

                {/* <!-- 친구 ID 3 --> */}
                <div className="puppy__box">
                  <div className="puppy__border">
                    <img
                      className="puppy"
                      src="/images/Ahnsangjun/mycat2.jpg"
                      alt="mycat2"
                    />
                  </div>
                  <div className="puppy__border__info">
                    <p className="puppy__border__id">baby_tiger</p>
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
    </>
  );
}

export default MainAsj;
