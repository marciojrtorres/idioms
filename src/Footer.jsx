import React from 'react';
import Button from './Button';
import './Footer.css';

function Footer({ idiom, revealAnswer, doUpdateKnowledge}) {
  const revealed = revealAnswer ? "reveal" : "hide";
  const noClueAboutIt = () => doUpdateKnowledge(idiom, 0);
  const wasntSureWhatItMeans = () => doUpdateKnowledge(idiom, 0.5);
  const yeahIKnew = () => doUpdateKnowledge(idiom, 1);
  return (
    <footer className={revealed}>
      <Button id="no" emoji="🥴" text="no clue"
        onClick={noClueAboutIt} />
      <Button id="uh" emoji="🤔" text="wasn't sure"
        onClick={wasntSureWhatItMeans} />
      <Button id="ok" emoji="😀" text="knew it!"
        onClick={yeahIKnew} />
    </footer>
  );
}

export default Footer;
