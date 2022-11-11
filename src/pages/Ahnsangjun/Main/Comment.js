import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="movie-title">{comment}</div>
    </div>
  );
};

export default Comment;
