import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeedsArea from './FeedsArea';
import { Data_Info_Area } from './Data_Info_Area';
import './MainPmy.scss';

export default function MainPmy() {
  useEffect(() => {
    fetch('/data/feedsData.json')
      .then(response => {
        return response.json();
      })
      .then(feedsData => {
        return setFeedsData(feedsData);
        //return console.log(feedsData);
      });
  }, []);

  const [isFeedsData, setFeedsData] = useState([]);

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
          <div className="feedsLoopArea">
            {/* 피드 반복 구간 */}
            {isFeedsData.map(function (feeds) {
              return <FeedsArea data={feeds} key={feeds.id} />;
            })}
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
                {Data_Info_Area.map(info => {
                  return (
                    <li key={info.id}>
                      <Link to={info.url}>{info.text}</Link>
                    </li>
                  );
                })}
                {/* 
                <li>
                  <a href="javascript:void(0)">Instagram 정보</a>
                </li> 
                */}
              </ul>

              <p className="copyRight">© 2019 INSTAGRAM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
