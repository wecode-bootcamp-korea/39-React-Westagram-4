import React, { useState } from 'react';
import './MainWsm.scss';
import Nav from '../../../components/Nav/Nav';

export default function MainWsm() {
  const [comment, setComment] = useState();
  const [commentList] = useState([]);
  const regiComment = e => {
    if (e.key === 'Enter' || e.target.nodeName === 'BUTTON') {
      if (comment.length > 0) commentList.push(comment);
      setComment('');
    }
  };
  return (
    <>
      <Nav />
      <div className="navcant">
        <div className="logo item">
          <h1>Westagram</h1>
        </div>
        <div className="input-bar item">
          <input className="input-a click-ev" type="text" placeholder="검색" />
          <svg
            className="origsvg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </div>
        <div className="icons item">
          <li>
            <a href="#!">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </a>
            <a href="#!">
              <img
                className="messge-icon"
                src="/images/Woosukmin/message.png"
                alt="message"
              />
            </a>
            <a href="#!">
              <img src="/images/Woosukmin/addPost.png" alt="addPost" />
            </a>
            <a href="#!">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M306.7 325.1L162.4 380.6C142.1 388.1 123.9 369 131.4 349.6L186.9 205.3C190.1 196.8 196.8 190.1 205.3 186.9L349.6 131.4C369 123.9 388.1 142.1 380.6 162.4L325.1 306.7C321.9 315.2 315.2 321.9 306.7 325.1V325.1zM255.1 224C238.3 224 223.1 238.3 223.1 256C223.1 273.7 238.3 288 255.1 288C273.7 288 288 273.7 288 256C288 238.3 273.7 224 255.1 224V224zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
              </svg>
            </a>
            <a href="#!">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
              </svg>
            </a>
            <div className="plop-body">
              <a href="#!" className="plop">
                <img src="/images/Woosukmin/father.jpg" alt="father" />
              </a>
            </div>
          </li>
        </div>
      </div>
      <section>
        <div className="section">
          <div className="section-1">
            <div className="story">
              <div className="plofile">
                <div className="gradation">
                  <div className="story-item plofile1 obj">
                    <img
                      className="story-img"
                      src="/images/Woosukmin/p1.jpeg"
                      alt="p1"
                    />
                  </div>
                </div>
                <div className="gradation">
                  <div className="story-item plofile2 obj">
                    <img
                      className="story-img"
                      src="/images/Woosukmin/p2.jpeg"
                      alt="story2"
                    />
                  </div>
                </div>
                <div className="gradation">
                  <div className="story-item plofile3 obj">
                    <img
                      className="story-img"
                      src="/images/Woosukmin/p3.jpeg "
                      alt="story3"
                    />
                  </div>
                </div>
                <div className="gradation">
                  <div className="story-item plofile4 obj">
                    <img
                      className="story-img"
                      src="/images/Woosukmin/p4.jpeg "
                      alt="story4"
                    />
                  </div>
                </div>
                <div className="gradation">
                  <div className="story-item plofile5 obj">
                    <img
                      className="story-img"
                      src="/images/Woosukmin/p5.jpeg "
                      alt="story5"
                    />
                  </div>
                </div>
                <div className="gradation">
                  <div className="story-item plofile6 obj">
                    <img
                      className="story-img"
                      src="/images/Woosukmin/p6.jpeg "
                      alt="story6"
                    />
                  </div>
                </div>
              </div>
              <div className="user-name">
                <p>jesus_4627</p>
                <p>maria_0815</p>
                <p>joseph_0319</p>
                <p>andrew_0705</p>
                <p>francis_0402</p>
                <p>john_1011</p>
              </div>
            </div>
            <div className="feeds">
              <div className="feeds-1">
                <div className="feeds-hearder">
                  <div className="feeds-gradation">
                    <img
                      className="feed-1-img"
                      src="/images/Woosukmin/p2.jpeg"
                      alt="Maria"
                    />
                  </div>
                  <div className="feed-name">
                    <span>maria_0815</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" />
                  </svg>
                </div>
                <div className="feeds-1-photo">
                  <img
                    className="photo-1"
                    src="/images/Woosukmin/img3.jpeg"
                    alt="saint jone"
                  />
                </div>
                <div className="comment-box">
                  <div className="lick-bar">
                    <div>
                      <button type="button" className="hart-button">
                        <svg
                          className="hart"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                        </svg>
                      </button>
                      <svg
                        className="comment"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
                      </svg>
                      <img src="/images/Woosukmin/message.png" alt="message" />
                    </div>
                    <div>
                      <img
                        src="/images/Woosukmin/bookmark.png"
                        alt="bookmark"
                      />
                    </div>
                  </div>
                  <div className="lick-view">
                    <div className="view-img-div">
                      <img src="/images/Woosukmin/p2.jpeg" alt="maria" />
                    </div>
                    <p>maria_0815님 외</p>
                    <b className="lieckr">1004명</b>
                    <p>이 좋아합니다</p>
                  </div>
                  <div className="title">
                    maria_0815<span>With My Sun🥰</span>
                  </div>
                  <div className="comments">
                    <a href="#!">댓글 1004개 모두 보기</a>
                  </div>
                  <ul className="comment-ul-1">
                    <li className="description-comment">
                      <div className="article-info">
                        <div className="ariticle-id">andrew_0705</div>
                        <div className="article-description">Oh! my Jesus</div>
                      </div>
                      <div className="comment-function">
                        <button className="comment-delete">삭제</button>
                        <i className="fa-regular fa-heart" />
                      </div>
                    </li>
                    {commentList.map((comment, index) => (
                      <li className="description-comment" key={index}>
                        <div className="article-info">
                          <div className="ariticle-id">''</div>
                          <div className="article-description">{comment}</div>
                        </div>
                        <div className="comment-function">
                          <button className="comment-delete">삭제</button>
                          <i className="fa-regular fa-heart" />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="comment-bar">
                    <img
                      className="comment-img"
                      src="/images/Woosukmin/smile.png"
                      alt="smile"
                    />
                    <form>
                      <input
                        className="comment-input-1"
                        placeholder="댓글입력..."
                        type="text"
                        onChange={e => {
                          setComment(e.target.value);
                        }}
                        onKeyUp={regiComment}
                      />
                      <button
                        // disabled
                        className="comment-button-1"
                        // type="submit"
                        onClick={regiComment}
                      >
                        {/* {/* <h1 className="posting-1"> */}
                        게시
                        {/* </h1> */}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="feeds-2">
                <div className="feeds-hearder">
                  <div className="feeds-gradation">
                    <img
                      className="feed-2-img"
                      src="/images/Woosukmin/p3.jpeg"
                      alt="saint joseph"
                    />
                  </div>
                  <div className="feed-name">
                    <span>joseph_0319</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" />
                  </svg>
                </div>
                <div className="feeds-1-photo">
                  <img
                    className="photo-1"
                    src="/images/Woosukmin/imp2.jpeg"
                    alt="a painting by Saint Joseph"
                  />
                </div>
                <div className="comment-box">
                  <div className="lick-bar">
                    <div>
                      <button type="button" className="hart-button-1">
                        <svg
                          className="hart-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                        </svg>
                      </button>
                      <svg
                        className="comment"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
                      </svg>
                      <img src="/images/Woosukmin/message.png" alt="message" />
                    </div>
                    <div>
                      <img
                        src="/images/Woosukmin/bookmark.png"
                        alt="bookmark"
                      />
                    </div>
                  </div>
                  <div className="lick-view">
                    <div className="view-img-div">
                      <img src="/images/Woosukmin/p2.jpeg" alt="saint Joseph" />
                    </div>
                    <p>maria_0815님 외</p>
                    <b className="lieckr-1">4627명</b>
                    <p>이 좋아합니다</p>
                  </div>
                  <div className="title">
                    joseph_0319
                    <span>With My Sun😍</span>
                  </div>
                  <div className="comments">
                    <a href="#!">댓글 46개 모두 보기</a>
                  </div>
                  <ul className="comment-ul-1">
                    <li className="description-comment">
                      <div className="article-info">
                        <div className="ariticle-id">john_1011</div>
                        <div className="article-description">Oh! my God</div>
                      </div>
                      <div className="comment-function">
                        <button className="comment-delete">삭제</button>
                        <i className="fa-regular fa-heart" />
                      </div>
                    </li>
                    {commentList.map((comment, index) => (
                      <li className="description-comment" key={index}>
                        <div className="article-info">
                          <div className="ariticle-id">''</div>
                          <div className="article-description">{comment}</div>
                        </div>
                        <div className="comment-function">
                          <button className="comment-delete">삭제</button>
                          <i className="fa-regular fa-heart" />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="comment-bar">
                    <img
                      className="comment-img"
                      src="/images/Woosukmin/smile.png"
                      alt="smile"
                    />
                    <form>
                      <input
                        className="comment-input-2"
                        placeholder="댓글입력..."
                        type="text"
                        onChange={e => {
                          setComment(e.target.value);
                        }}
                        onKeyUp={regiComment}
                      />
                      <button
                        disabled
                        className="comment-button-2"
                        type="submit"
                      >
                        <h1 className="posting-2" onClick={regiComment}>
                          게시
                        </h1>{' '}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-2">
            <div className="plus-farow">
              <div className="farow-pohto-body">
                <div>
                  <img
                    className="farow-pohto"
                    src="/images/Woosukmin/father.jpg"
                    alt="myimage"
                  />
                </div>
              </div>
              <div className="farow-text">
                <b>stargiraffe3710</b>
                <p>로만</p>
              </div>
              <div className="farow-button">
                <a href="#!">
                  <b>전환</b>
                </a>
              </div>
            </div>
            <div className="suggestion">
              <b>회원님을 위한 추천</b>
              <a href="#!">
                <b>모두보기</b>
              </a>
            </div>
            <div className="mor">
              <div className="aa">
                <img
                  className="cat-img"
                  src="/images/Woosukmin/andong.jpeg"
                  alt="andong logo"
                />
              </div>
              <div className="dhe-text">
                <b>andong.catholic</b>
                <p>17_eda님 외 3명이 팔로우합니다</p>
              </div>
              <a href="#!">
                <b className="follow">팔로우</b>
              </a>
            </div>
            <div className="mor">
              <div className="aa">
                <img
                  className="cat-img"
                  src="/images/Woosukmin/seoul.png"
                  alt="seoul logo"
                />
              </div>
              <div className="dhe-text">
                <b>seoul.catholic</b>
                <p>회원님을 팔로우합니다</p>
              </div>
              <a href="!#">
                <b className="follow">팔로우</b>
              </a>
            </div>
            <div className="mor">
              <div className="aa">
                <img
                  className="cat-img"
                  src="/images/Woosukmin/17eda.jpeg"
                  alt="열일곱이다 로고"
                />
              </div>
              <div className="dhe-text">
                <b>17_eda</b>
                <p>adios님 외 27명이 팔로우합니다</p>
              </div>
              <a href="!#">
                <b className="follow">팔로우</b>
              </a>
            </div>
            <div className="mor">
              <div className="aa">
                <img
                  className="cat-img"
                  src="/images/Woosukmin/adios.jpg"
                  alt="아디다스 로고"
                />
              </div>
              <div className="dhe-text">
                <b>adios</b>
                <p>dgca_jesusclub님 외 11명이 팔로우합니다</p>
              </div>
              <a href="!#">
                <b className="follow">팔로우</b>
              </a>
            </div>
            <div className="mor">
              <div className="aa">
                <img
                  className="cat-img"
                  src="/images/Woosukmin/amazoff.jpg"
                  alt="아마조프 로고"
                />
              </div>
              <div className="dhe-text">
                <b>amazoff</b>
                <p>nike님 외 26명이 팔로우합니다</p>
              </div>
              <a href="!#">
                <b className="follow">팔로우</b>
              </a>
            </div>
            <div className="end">
              <b>소개 도움말 홍보 센터 API 채용 정보</b>
              <b>개인정보처리방침 약관 위치 언어</b>
            </div>
            <div className="end-2">© 2022 WESTAGRAM FROM META</div>
          </div>
        </div>
      </section>
    </>
  );
}
