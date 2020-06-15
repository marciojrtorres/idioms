import React from 'react';
import Button from './Button.js';
import './Footer.css';

function Footer({idiom, reveal, next}) {
  const revealed = reveal ? "reveal" : "hide";
  return (
    <footer className={revealed}>
      <Button id="no" text="no clue" emoji="🥴"
        onClick={() => next(idiom, 0)} />
      <Button id="uh" text="wasn't sure" emoji="🤔"
        onClick={() => next(idiom, 0.5)} />
      <Button id="ok" text="knew it!" emoji="😀"
        onClick={() => next(idiom, 1)} />
    </footer>
  );
}

export default Footer;
