import React from 'react';
import './MainKsj.scss';

export default function MainKsj() {
  const imgUrl = '/images/Kusujeong/IMG_8905.JPG';

  return (
    <main className="main">
      <article className="main-left">
        <div className="stories">
          <ul className="story">
            <li>
              <img
                className="story-profile"
                src={imgUrl}
                alt="스토리 프로필이미지"
              />
              <span className="story-id">9sssu</span>
            </li>
            <li>
              <img
                className="story-profile"
                src={imgUrl}
                alt="스토리 프로필이미지"
              />
              <span className="story-id">9sssu</span>
            </li>
            <li>
              <img
                className="story-profile"
                src={imgUrl}
                alt="스토리 프로필이미지"
              />
              <span className="story-id">9sssu</span>
            </li>
            <li>
              <img
                className="story-profile"
                src={imgUrl}
                alt="스토리 프로필이미지"
              />
              <span className="story-id">9sssu</span>
            </li>
            <li>
              <img
                className="story-profile"
                src={imgUrl}
                alt="스토리 프로필이미지"
              />
              <span className="story-id">9sssu</span>
            </li>
            <li>
              <img
                className="story-profile"
                src={imgUrl}
                alt="스토리 프로필이미지"
              />
              <span className="story-id">9sssu</span>
            </li>
          </ul>
        </div>
        {/* <!-- 피드 --> */}
        <div className="feed">
          <div className="feed-header">
            <div className="feed-logo">
              <img
                className="feed-profile"
                src={imgUrl}
                alt="피드 프로필이미지"
              />
              9sssu
            </div>
            <i className="fa-solid fa-ellipsis feed-menu" />
          </div>
          <div className="feed-article">
            <img className="feed-img" src={imgUrl} alt="피드 사진" />
          </div>
          <div className="feed-list">
            <div className="feed-left_list">
              <i className="fa-regular fa-heart" />
              <i className="fa-regular fa-comment" />
              <i className="fa-regular fa-paper-plane" />
            </div>
            <div className="feed-middle_list">
              <span className="middle-dot" />
              <span className="middle-dot" />
              <span className="middle-dot" />
              <span className="middle-dot" />
              <span className="middle-dot" />
              <span className="middle-dot" />
            </div>
            <div className="feed-right_list">
              <i className="fa-regular fa-bookmark" />
            </div>
          </div>
          <div className="feed-description">
            <div className="description-like">좋아요 3,460개</div>
            <div className="description-article">
              <div className="article-info">
                <div className="ariticle-id">9sssu</div>
                <div className="article-description">귀여운 사모예드찡</div>
              </div>
              <div className="article-more">...더보기</div>
            </div>
            <div className="description-commentAll">댓글 266개 모두 보기</div>
            <ul id="commentList">
              <li className="description-comment">
                <div className="article-info">
                  <div className="ariticle-id">rntnwjd</div>
                  <div className="article-description">어머 너무 귀엽당~~!</div>
                </div>
                <div className="comment-function">
                  <button className="comment-delete">삭제</button>
                  <i className="fa-regular fa-heart" />
                </div>
              </li>
            </ul>
          </div>
          <div className="description-date">2일 전</div>
          <div className="feed-footer">
            <div className="footer-logo">
              <div className="footer-smile">
                <i className="fa-regular fa-face-smile" />
              </div>
              <div className="footer-comment">
                <input
                  className="comment-input"
                  type="text"
                  placeholder="댓글달기"
                />
              </div>
            </div>
            <div className="footer-enter">
              <button className="comment-btn btn">게시</button>
            </div>
          </div>
        </div>
      </article>
      <article className="main-right">
        <div className="right-container">
          <div className="myProfile">
            <div className="myProfile-logo">
              <div className="profile-img">
                <img
                  className="story-profile"
                  src={imgUrl}
                  alt="오른쪽 아티클 내 프로필사진"
                />
              </div>
              <div className="profile-info">
                <div className="profile-id">9sssu</div>
                <div className="profile-name">구수정</div>
              </div>
            </div>
            <div className="profile-change">
              <button className="comment-btn btn">전환</button>
            </div>
          </div>
          <div className="recommand">
            <div className="recommand-title">
              <div className="title-1">회원님을 위한 추천</div>
              <div className="title-2">
                <button className="recommand-btn">모두 보기</button>
              </div>
            </div>
            <div className="recommend-user">
              <div className="recoProfile">
                <ul className="recoProfile">
                  <li className="recoProfile-list">
                    <div className="recoProfile-logo">
                      <div className="recoprofile-img">
                        <img
                          className="reco-profile"
                          src={imgUrl}
                          alt="추천친구 프로필이미지"
                        />
                      </div>
                      <div className="reco-profile-info">
                        <div className="reco-profile-id">sujeong</div>
                        <div className="reco-profile-name">
                          9sssu 외 1명이 팔로우중입니다.
                        </div>
                      </div>
                    </div>
                    <div className="profile-follow">
                      <button className="follow-btn btn">팔로우</button>
                    </div>
                  </li>
                  <li className="recoProfile-list">
                    <div className="recoProfile-logo">
                      <div className="recoprofile-img">
                        <img
                          className="reco-profile"
                          src={imgUrl}
                          alt="추천친구 프로필이미지"
                        />
                      </div>
                      <div className="reco-profile-info">
                        <div className="reco-profile-id">sujeong</div>
                        <div className="reco-profile-name">
                          9sssu 외 1명이 팔로우중입니다.
                        </div>
                      </div>
                    </div>
                    <div className="profile-follow">
                      <button className="follow-btn btn">팔로우</button>
                    </div>
                  </li>
                  <li className="recoProfile-list">
                    <div className="recoProfile-logo">
                      <div className="recoprofile-img">
                        <img
                          className="reco-profile"
                          src={imgUrl}
                          alt="추천친구 프로필이미지"
                        />
                      </div>
                      <div className="reco-profile-info">
                        <div className="reco-profile-id">sujeong</div>
                        <div className="reco-profile-name">
                          9sssu 외 1명이 팔로우중입니다.
                        </div>
                      </div>
                    </div>
                    <div className="profile-follow">
                      <button className="follow-btn btn">팔로우</button>
                    </div>
                  </li>
                  <li className="recoProfile-list">
                    <div className="recoProfile-logo">
                      <div className="recoprofile-img">
                        <img
                          className="reco-profile"
                          src={imgUrl}
                          alt="추천친구 프로필이미지"
                        />
                      </div>
                      <div className="reco-profile-info">
                        <div className="reco-profile-id">sujeong</div>
                        <div className="reco-profile-name">
                          9sssu 외 1명이 팔로우중입니다.
                        </div>
                      </div>
                    </div>
                    <div className="profile-follow">
                      <button className="follow-btn btn">팔로우</button>
                    </div>
                  </li>
                  <li className="recoProfile-list">
                    <div className="recoProfile-logo">
                      <div className="recoprofile-img">
                        <img
                          className="reco-profile"
                          src={imgUrl}
                          alt="추천친구 프로필이미지"
                        />
                      </div>
                      <div className="reco-profile-info">
                        <div className="reco-profile-id">sujeong</div>
                        <div className="reco-profile-name">
                          9sssu 외 1명이 팔로우중입니다.
                        </div>
                      </div>
                    </div>
                    <div className="profile-follow">
                      <button className="follow-btn btn">팔로우</button>
                    </div>
                  </li>
                  <li className="recoProfile-list">
                    <div className="recoProfile-logo">
                      <div className="recoprofile-img">
                        <img
                          className="reco-profile"
                          src={imgUrl}
                          alt="추천친구 프로필이미지"
                        />
                      </div>
                      <div className="reco-profile-info">
                        <div className="reco-profile-id">sujeong</div>
                        <div className="reco-profile-name">
                          9sssu 외 1명이 팔로우중입니다.
                        </div>
                      </div>
                    </div>
                    <div className="profile-follow">
                      <button className="follow-btn btn">팔로우</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <footer className="footer">
            <ul className="recommand-footer">
              <li className="footer-list">소개</li>
              <li className="footer-list">도움말</li>
              <li className="footer-list">홍보센터</li>
              <li className="footer-list">API</li>
              <li className="footer-list">채용정보</li>
              <li className="footer-list">개인정보처리방침</li>
              <br />
              <li className="footer-list">약관</li>
              <li className="footer-list">위치</li>
              <li className="footer-list">언어</li>
            </ul>
            <span className="copyright footer">
              <i className="fa-regular fa-copyright" />
              2022 westagram from sujeong
            </span>
          </footer>
        </div>
      </article>
    </main>
  );
}
