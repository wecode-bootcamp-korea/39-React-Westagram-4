import React from 'react';

export default function Comment({ userName, comment, key }) {
  return (
    <li className="description-comment" key={key}>
      <div className="article-info">
        <div className="ariticle-id">{userName}</div>
        <div className="article-description">{comment}</div>
      </div>
      <div className="comment-function">
        <button className="comment-delete">삭제</button>
        <i className="fa-regular fa-heart" />
      </div>
    </li>
  );
}
