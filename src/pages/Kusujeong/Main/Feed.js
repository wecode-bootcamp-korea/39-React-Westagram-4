import React, { useState, useEffect } from 'react';
import Comment from './Comment';

export default function Feed({ feedInfo }) {
  // Input창에 입력한 텍스트 저장할 state
  const [comment, setComment] = useState('');
  // 댓글을 저장할 배열
  const [commentList, setCommentList] = useState([]);

  // 댓글 등록
  // 엔터나 게시버튼을 누르면 commentList에 입력한 댓글을 저장하고 그걸 html에 뿌려준다
  const regiComment = e => {
    if (e.key === 'Enter' || e.target.nodeName === 'BUTTON') {
      if (comment.length > 0) {
        setCommentList([...commentList, comment]);
        setComment('');
      }
    }
  };

  // 댓글 삭제
  const deleteComment = index => {
    return () => {
      const commentArr = [...commentList];
      commentArr.splice(index, 1);
      setCommentList(commentArr);
    };
  };

  return (
    <div className="feed">
      <div className="feed-header">
        <div className="feed-logo">
          <img
            className="feed-profile"
            src={feedInfo.profileImg}
            alt="피드 프로필이미지"
          />
          {feedInfo.userName}
        </div>
        <i className="fa-solid fa-ellipsis feed-menu" />
      </div>
      <div className="feed-article">
        <img className="feed-img" src={feedInfo.feedImg} alt="피드 사진" />
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
            <div className="ariticle-id">{feedInfo.userName}</div>
            <div className="article-description">{feedInfo.feedContent}</div>
          </div>
          <div className="article-more">...더보기</div>
        </div>
        <div className="description-commentAll">
          댓글 {commentList.length}개 모두 보기
        </div>
        <ul id="commentList">
          {commentList.map((comment, index) => (
            <Comment
              comment={comment}
              key={index}
              deleteComment={deleteComment(index)}
            />
          ))}
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
              onChange={e => {
                setComment(e.target.value);
              }}
              onKeyUp={regiComment}
              value={comment}
            />
          </div>
        </div>
        <div className="footer-enter">
          <button className="comment-btn btn" onClick={regiComment}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
}
