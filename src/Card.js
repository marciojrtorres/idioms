import React from 'react';

function Card({id, className, onReveal, text}) {
  return (
    <section id={id} 
      className={className} 
      onClick={onReveal}>
      {text}
    </section>
  );
}

export default Card;
