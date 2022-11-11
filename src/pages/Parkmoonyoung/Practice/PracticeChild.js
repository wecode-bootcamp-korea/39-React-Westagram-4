import React from 'react';

export default function PracticeChild(props) {
  console.log(props);
  return (
    <div>
      PracticeChild
      <button onClick={props.paramFn}>버튼클릭</button>
    </div>
  );
}
