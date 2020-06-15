import React from 'react';

function Button({kind, onClick, text, emoji}) {
  return (
    <div className={['Button', kind].join(' ')}>
      <button onClick={onClick}>
        <span role="img" aria-label={text}>{emoji}</span>
      </button>
      <span>{text}</span>
    </div>
  );
}

export default Button;
