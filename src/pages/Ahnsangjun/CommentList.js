import React from 'react';
import CommentItem from './CommentItem';

function CommentList(props) {
  return (
    <div>
      {props.todoList.map(item => (
        <CommentItem item={item} />
      ))}
      <CommentItem />
    </div>
  );
}

export default CommentList;
