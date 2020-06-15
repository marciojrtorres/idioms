import React from 'react';

function Button(props) {
  return (
    <div className={['Button', props.kind].join(' ')}>
      <button onClick={props.onClick}>
        <span role="img" aria-label={props.text}>
          {props.emoji}
        </span>
      </button>
      <span>
        {props.text}
      </span>
    </div>
  );
}

export default Button;
