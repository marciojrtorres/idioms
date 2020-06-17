import React from 'react';
import './Overlay.scss';

function Overlay({onCloseOverlay, onCheck}) {
  return (
    <div className="overlay">
      <div className="content">
        <h2>
          <span role="img" aria-label="cake">🍰</span>
          Piece of Cake /// Idioms
        </h2>
        <p>
          This FlashCards Web App was developed inspired by <a href="https://www.goconqr.com/flashcard/3144847/idiomatic-expressions-2" target="_blank" rel="noopener noreferrer">this one</a><span>⬀</span>. As I'm a software developer, and I'm learning English, I thought I could develop a similar one, suitable for mobile devices and with a simpler user interface.
        </p>
        <p>
          It is quite simple to use. You click or touch the screen to see the meaning of the <strong>idiom</strong> being presented. Such <strong>idiom</strong> will appear less often if you know what it means, and it will be shown more frequently if you don't.
        </p>
        <p>
          That's it. Check this box
          <input type="checkbox" onChange={onCheck} />
          if you don't want to see this introduction again.
        </p>
        <button onClick={onCloseOverlay}>
          <span role="img" aria-label="close">
            ✖️
          </span>
          &nbsp;Close
        </button>
      </div>
    </div>
  );
}

export default Overlay;
