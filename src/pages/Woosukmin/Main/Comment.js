import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Comment = props => {
  return (
    <div className="feedComment">
      <p className="feedCommentNickname">
        andrew
        <span className="feedCommentOne">{props.value}</span>
      </p>
      <div>
        <FontAwesomeIcon
          icon={faXmark}
          id={props.idx}
          style={{ width: '12px', marginRight: '10px' }}
          onClick={() => {
            props.DeleteBtn(props.id);
          }}
        />
      </div>
    </div>
  );
};

export default Comment;
