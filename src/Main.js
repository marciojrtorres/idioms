import React from 'react';
import Card from './Card.js';
import './Main.css';

function Main(props) {
  return (
    <main>
      <Card id="idiom" className={props.reveal ? 'reveal' : ''}
        onReveal={props.onReveal}
        text={props.idiom || 'be my guest'} />
      <Card id="meaning" className={props.reveal ? "reveal" : "hide"}
        text={props.meaning || 'do what you want; feel free; help yourself'} />
    </main>
  );
}

export default Main;
