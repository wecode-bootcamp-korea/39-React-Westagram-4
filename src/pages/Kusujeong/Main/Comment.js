import React from 'react';

export default function Comment({ comment, deleteComment }) {
  return (
    <li className="description-comment">
      <div className="article-info">
        <div className="ariticle-id">rntnwjd</div>
        <div className="article-description">{comment}</div>
      </div>
      <div className="comment-function">
        <button className="comment-delete" onClick={deleteComment}>
          삭제
        </button>
        <i className="fa-regular fa-heart" />
      </div>
    </li>
  );
}
