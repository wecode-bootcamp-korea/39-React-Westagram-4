import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Comment = props => {
  console.log(props);

  return (
    <div className="feedComment">
      <p className="feedCommentNickname">
        andrew
        <span className="feedCommentOne">{props.comment}</span>
      </p>
      <div>
        <FontAwesomeIcon
          icon={faXmark}
          id={props.idx}
          style={{ width: '12px', marginRight: '10px' }}
          onClick={DeleteBtn}
        />
      </div>
    </div>
  );
};

export default Comment;
