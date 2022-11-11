import React, { useState } from 'react';
import RepleLi from './RepleLi';

export default function FeedsArea(props) {
  const [isRepleValue, setRepleValue] = useState('');
  const [repleArrData, setRepleArrData] = useState(props.data);
  const [repleData, setRepleData] = useState(props.data.personalRepleData);

  // 인풋 밸류 체크
  function valueCheck(e) {
    setRepleValue(e.target.value);
  }

  // 게시 버튼 클릭시 실행되는 함수
  function addPost(e) {
    if (
      (e.target.className === 'btn post' || e.keyCode === 13) &&
      isRepleValue.length > 0
    ) {
      setRepleValue('');
      setRepleData([...repleData, { name: 'myp', text: isRepleValue }]);
    }
  }

  return (
    <div className="feedsArea">
      <div className="feedsHeader">
        <div className="profileBox">
          <div className="imgBox">
            <img src={props.data.userThumbImgUrl} alt="myp" />
          </div>
          <span className="nickName">{props.data.userId}</span>
        </div>
        <button className="btn detail">
          <span className="blind">상세보기</span>
        </button>
      </div>

      <div className="feedsContentsArea">
        <div className="feedsImgArea">
          <ul>
            <li>
              <img src={props.data.userFeedsImgUrl} alt="myp" />
            </li>
          </ul>
        </div>
        <div className="feedsUtilArea">
          <div className="feedsBtnArea">
            <button className="btn heart active">
              <span className="blind">좋아요</span>
            </button>
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
            <b className="myName">myp</b>
            <span className="txt">위워크에서 진행한 베이킹 클래스...</span>
            <button className="btn more">더 보기</button>
          </div>
          <ul className="repleList">
            {/*
            <RepleLi repleArr={repleData} repleSaveValue={isRepleValue} />
            */}
            {repleData.map(function (elem, index) {
              return <RepleLi data={elem} key={index} />;
            })}
          </ul>
        </div>
        <div className="addRepleBox">
          <input
            type="text"
            className="replePost"
            placeholder="댓글 달기..."
            onChange={valueCheck}
            value={isRepleValue}
            onKeyUp={addPost}
          />
          <button className="btn post" onClick={addPost}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
}
