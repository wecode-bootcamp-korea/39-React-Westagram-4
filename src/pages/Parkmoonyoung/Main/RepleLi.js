import React from 'react';

export default function RepleLi() {
  return (
    <li>
      <b className="nickName">neceosecius</b>
      <span className="txt">거봐 좋았잖아~~~~~~~~</span>
      {/* .on 클래스 추가시 활성화 */}
      <button className="btn heart">
        <span className="blind">좋아요</span>
      </button>
      <button className="btn delete">
        <span className="blind">삭제</span>
      </button>
      <p className="prevTime">42분 전</p>
    </li>
  );
}
