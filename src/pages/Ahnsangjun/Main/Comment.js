import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p className="movie-title">{comment}</p>
    </div>
  );
};

export default Comment;
