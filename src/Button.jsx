import React from 'react';

function Button({id, onClick, text, emoji}) {
  return (
    <div id={id} className="Button">
      <button onClick={onClick}>
        <span role="img" aria-label={text}>{emoji}</span>
      </button>
      <span>{text}</span>
    </div>
  );
}

export default Button;
