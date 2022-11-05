import React from 'react';
import './MainPmy.scss';
import { Link } from 'react-router-dom';
import RepleLi from './RepleLi';

export default function MainPmy() {
  return (
    <div className="wrap">
      <nav className="navWrap">
        <div className="inner">
          <h1 className="logo addIcon">
            <Link to="/main">instagram</Link>
          </h1>

          <div className="searchArea">
            <input type="text" className="mainSearch" />
            <span className="placeholderBox">검색</span>

            {/* .searchResultBox에 [.active] 추가시 노출됨 */}
            <div className="searchResultBox">
              <ul>
                {/* li 동적 생성되야함
                    <li>
                        <b className="searchId">myp</b>
                    </li>
                */}
              </ul>
            </div>
          </div>

          <div className="utilMenuArea">
            {/* 버튼활성화시 .active 추가됨 */}
            <div className="utilBox">
              <button className="btn btnUtilSearch">
                <span className="blind">탐색</span>
              </button>
            </div>
            <div className="utilBox">
              <button className="btn btnUtilHeart active">
                <span className="blind">하트</span>
              </button>
            </div>
            <div className="utilBox">
              <button className="btn btnUtilMypage">
                <span className="blind">마이페이지</span>
              </button>
            </div>
            <div className="utilBox profileBox">
              <button className="btn btnUtilProfile">
                <span className="blind">프로필</span>
              </button>
              <div className="profileMenu">
                {/* .active 추가시 노출됨 */}
                프로필메뉴박스
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="mainWrap">
        <div className="feedsWrap">
          <div className="feedsArea">
            <div className="feedsHeader">
              <div className="profileBox">
                <div className="imgBox">
                  <img
                    src="/images/Parkmoonyoung/profile/my-profile.jpg"
                    alt="myp"
                  />
                </div>
                <span className="nickName">myp</span>
              </div>
              <button className="btn detail">
                <span className="blind">상세보기</span>
              </button>
            </div>

            <div className="feedsContentsArea">
              <div className="feedsImgArea">
                <ul>
                  <li>
                    <img
                      src="/images/Parkmoonyoung/profile/my-profile.jpg"
                      alt="myp"
                    />
                  </li>
                </ul>
              </div>
              <div className="feedsUtilArea">
                <div className="feedsBtnArea">
                  <button className="btn heart active">
                    <span className="blind">좋아요</span>
                  </button>{' '}
                  {/* .active 추가시 활성화 */}
                  <button className="btn reple">
                    <span className="blind">리플쓰기</span>
                  </button>
                  <button className="btn share">
                    <span className="blind">공유하기</span>
                  </button>
                  <button className="btn favorite">
                    <span className="blind">즐겨찾기</span>
                  </button>
                </div>
                <div className="repleTotal">
                  <div className="imgBox">
                    <img
                      src="/images/Parkmoonyoung/profile/my-profile.jpg"
                      alt="myp"
                    />
                  </div>
                  <p className="totalTxt">
                    <span className="firstlyNick">aineworld</span>님{' '}
                    <span className="totalNumber">외 10명</span>이 좋아합니다
                  </p>
                </div>
                <div className="myReple reduce">
                  {/* .myReple : 내 리플, 글자 길 때 말줄임 사용 / [.reduce] 추가 */}
                  <b className="myName">myp</b>
                  <span className="txt">
                    위워크에서 진행한 베이킹 클래스...
                  </span>
                  <button className="btn more">더 보기</button>
                </div>
                <ul className="repleList">
                  <RepleLi />
                  <RepleLi />
                </ul>
              </div>
              <div className="addRepleBox">
                <input
                  type="text"
                  className="replePost"
                  placeholder="댓글 달기..."
                />
                <button className="btn post">게시</button>
                {/* .active 추가시 활성화 */}
              </div>
            </div>
          </div>

          <div className="feedsAsideArea">
            <div className="mainProfileArea">
              <div className="imgBox">
                <img
                  src="/images/Parkmoonyoung/profile/my-profile.jpg"
                  alt="myp"
                />
              </div>
              <div className="dataBox">
                <strong className="tit">wecode_bootcamp</strong>
                <span>WeCode | 위코드</span>
              </div>
            </div>

            <div className="nickDataArea story">
              <div className="nickDataHeader">
                <em>스토리</em>
                <button className="btn allView">모두 보기</button>
              </div>
              <ul className="nickList">
                <li>
                  <div className="userDataBox">
                    <div className="imgBox">
                      <img
                        src="/images/Parkmoonyoung/profile/my-profile.jpg"
                        alt="myp"
                      />
                    </div>
                    <div className="userData">
                      <strong className="userNickName">myp</strong>
                      <span className="time">16분전</span>
                      {/* 
                      <span className="txt">_legend_a 님 외 2명이</span>
                      <button className="btn follow">팔로우</button>
                      */}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="userDataBox">
                    <div className="imgBox">
                      <img
                        src="/images/Parkmoonyoung/profile/my-profile.jpg"
                        alt="myp"
                      />
                    </div>
                    <div className="userData">
                      <strong className="userNickName">myp</strong>
                      <span className="time">16분전</span>
                      {/* 
                      <span className="txt">_legend_a 님 외 2명이</span>
                      <button className="btn follow">팔로우</button>
                      */}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="userDataBox">
                    <div className="imgBox">
                      <img
                        src="/images/Parkmoonyoung/profile/my-profile.jpg"
                        alt="myp"
                      />
                    </div>
                    <div className="userData">
                      <strong className="userNickName">myp</strong>
                      <span className="time">16분전</span>
                      {/* 
                      <span className="txt">_legend_a 님 외 2명이</span>
                      <button className="btn follow">팔로우</button>
                      */}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="userDataBox">
                    <div className="imgBox">
                      <img
                        src="/images/Parkmoonyoung/profile/my-profile.jpg"
                        alt="myp"
                      />
                    </div>
                    <div className="userData">
                      <strong className="userNickName">myp</strong>
                      <span className="time">16분전</span>
                      {/* 
                      <span className="txt">_legend_a 님 외 2명이</span>
                      <button className="btn follow">팔로우</button>
                      */}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="userDataBox">
                    <div className="imgBox">
                      <img
                        src="/images/Parkmoonyoung/profile/my-profile.jpg"
                        alt="myp"
                      />
                    </div>
                    <div className="userData">
                      <strong className="userNickName">myp</strong>
                      <span className="time">16분전</span>
                      {/* 
                      <span className="txt">_legend_a 님 외 2명이</span>
                      <button className="btn follow">팔로우</button>
                      */}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="nickDataArea suggestion">
              <div className="nickDataHeader">
                <em>회원님을 위한 추천</em>
                <button className="btn allView">모두 보기</button>
              </div>
              <ul className="nickList">
                <li>
                  <div className="userDataBox">
                    <div className="imgBox">
                      <img
                        src="/images/Parkmoonyoung/profile/my-profile.jpg"
                        alt="myp"
                      />
                    </div>
                    <div className="userData">
                      <strong className="userNickName">myp</strong>
                      {/* <span className="time">16분전</span> */}
                      <span className="txt">_legend_a 님 외 2명이</span>
                      <button className="btn follow">팔로우</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="userDataBox">
                    <div className="imgBox">
                      <img
                        src="/images/Parkmoonyoung/profile/my-profile.jpg"
                        alt="myp"
                      />
                    </div>
                    <div className="userData">
                      <strong className="userNickName">myp</strong>
                      {/* <span className="time">16분전</span> */}
                      <span className="txt">_legend_a 님 외 2명이</span>
                      <button className="btn follow">팔로우</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="userDataBox">
                    <div className="imgBox">
                      <img
                        src="/images/Parkmoonyoung/profile/my-profile.jpg"
                        alt="myp"
                      />
                    </div>
                    <div className="userData">
                      <strong className="userNickName">myp</strong>
                      {/* <span className="time">16분전</span> */}
                      <span className="txt">
                        _legend_a 님 외 2명이_legend_a 님 외 2명이_legend_a 님
                        외 2명이_legend_a 님 외 2명이
                      </span>
                      <button className="btn follow">팔로우</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="dataInfoArea">
              <ul>
                <li>
                  <a href="javascript;void(0)">Instagram 정보</a>
                </li>
                <li>
                  <a href="javascript;void(0)">지원</a>
                </li>
                <li>
                  <a href="javascript;void(0)">홍보 센터</a>
                </li>
                <li>
                  <a href="javascript;void(0)">API</a>
                </li>
                <li>
                  <a href="javascript;void(0)">채용 정보</a>
                </li>
                <li>
                  <a href="javascript;void(0)">개인정보처리방침</a>
                </li>
                <li>
                  <a href="javascript;void(0)">약관</a>
                </li>
                <li>
                  <a href="javascript;void(0)">디렉터리</a>
                </li>
                <li>
                  <a href="javascript;void(0)">프로필</a>
                </li>
                <li>
                  <a href="javascript;void(0)">해시태그</a>
                </li>
                <li>
                  <a href="javascript;void(0)">언어</a>
                </li>
              </ul>

              <p className="copyRight">© 2019 INSTAGRAM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
