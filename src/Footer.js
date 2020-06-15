import React from 'react';
import Button from './Button.js';
import './Footer.css';

function Footer(props) {
  const idiom = props.idiom;
  return (
    <footer className={props.reveal ? "reveal" : "hide"}>
      <Button kind="no" text="no clue" emoji="🥴" 
        onClick={() => props.next(idiom, 0)} />
      <Button kind="uh" text="wasn't sure" emoji="🤔"
        onClick={() => props.next(idiom, 0.5)} />
      <Button kind="ok" text="knew it!" emoji="😀"
        onClick={() => props.next(idiom, 1)} />
    </footer>
  );
}

export default Footer;
