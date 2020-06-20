import React from 'react';
import Card from './Card';
import './Main.css';

function Main({doRevealAnswer, revealAnswer, idiom, meaning}) {
  return (
    <main>
      <Card id="idiom" className={revealAnswer ? 'reveal' : ''}
        onClick={doRevealAnswer}
        text={idiom || 'be my guest'} />
      <Card id="meaning" className={revealAnswer ? "reveal" : "hide"}
        text={meaning || 'do what you want; feel free; help yourself'} />
    </main>
  );
}

export default Main;
