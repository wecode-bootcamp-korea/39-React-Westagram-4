import React from 'react';
import './Signup.scss';

export default function Signup() {
  const [liked, setLiked] = React.useState(false);
  if (liked) {
    return 'you like this';
  }

  return (
    <button
      onClick={() => {
        setLiked(true);
      }}
    >
      Like
    </button>
  );
}
