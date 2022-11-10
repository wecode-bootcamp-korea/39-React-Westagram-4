import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed';
import { FOOTER_INFO_LIST } from './Footer';
import './MainKsj.scss';

export default function MainKsj() {
  const imgUrl = '/images/Kusujeong/IMG_8905.JPG';

  // mock data에서 불러온 피드 정보
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(response => response.json())
      .then(result => {
        setFeedList(result);
      });
  }, []);

  return (
    <>
      <Nav />
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
          {feedList.map(feed => (
            <Feed feedInfo={feed} key={feed.id} />
          ))}
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
                {FOOTER_INFO_LIST.map(info => (
                  <li className="footer-list" key={info.id}>
                    <a href="" className="footer-info">
                      {info.text}
                    </a>
                  </li>
                ))}
              </ul>
              <span className="copyright footer">
                <i className="fa-regular fa-copyright" />
                2022 westagram from sujeong
              </span>
            </footer>
          </div>
        </article>
      </main>
    </>
  );
}
