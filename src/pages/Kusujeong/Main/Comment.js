import React from 'react';

export default function Comment(props) {
  return (
    <li className="description-comment" key={props.key}>
      <div className="article-info">
        <div className="ariticle-id">rntnwjd</div>
        <div className="article-description">{props.comment}</div>
      </div>
      <div className="comment-function">
        <button className="comment-delete">삭제</button>
        <i className="fa-regular fa-heart" />
      </div>
    </li>
  );
}
