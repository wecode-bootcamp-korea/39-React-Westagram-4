import React, { useState } from 'react';

export default function RepleLi(props) {
  const [isLiStatus, setLiStatus] = useState('');
  function liHidden() {
    setLiStatus('hidden');
  }

  return (
    <li className={isLiStatus}>
      <b className="nickName">neceosecius</b>
      <span className="txt">{props.data.text}</span>
      {/* .on 클래스 추가시 활성화 */}
      <button className="btn heart">
        <span className="blind">좋아요</span>
      </button>
      <button className="btn delete" onClick={liHidden}>
        <span className="blind">삭제</span>
      </button>
      <p className="prevTime">42분 전</p>
    </li>
  );
}
