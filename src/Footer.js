import React from 'react';
import Button from './Button.js';
import './Footer.css';

function Footer({idiom, reveal, next}) {
  return (
    <footer className={reveal ? "reveal" : "hide"}>
      <Button kind="no" text="no clue" emoji="🥴"
        onClick={() => next(idiom, 0)} />
      <Button kind="uh" text="wasn't sure" emoji="🤔"
        onClick={() => next(idiom, 0.5)} />
      <Button kind="ok" text="knew it!" emoji="😀"
        onClick={() => next(idiom, 1)} />
    </footer>
  );
}

export default Footer;
