import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="movie-title">{comment.value}</div>
    </div>
  );
};

export default Comment;
