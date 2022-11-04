import React from 'react';
import './Practice.scss';
import PracticeChild from './PracticeChild';

export default function Practice() {
  function fnTest() {
    console.log('test');
  }

  return (
    <div>
      Parent
      <PracticeChild paramFn={fnTest} />
    </div>
  );
}
