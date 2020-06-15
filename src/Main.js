import React from 'react';
import Card from './Card.js';
import './Main.css';

function Main({onReveal, reveal, idiom, meaning}) {
  return (
    <main>
      <Card id="idiom" className={reveal ? 'reveal' : ''}
        onClick={onReveal}
        text={idiom || 'be my guest'} />
      <Card id="meaning" className={reveal ? "reveal" : "hide"}
        text={meaning || 'do what you want; feel free; help yourself'} />
    </main>
  );
}

export default Main;
