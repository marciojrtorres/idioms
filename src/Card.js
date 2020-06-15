import React from 'react';

function Card(props) {
  return (
    <section id={props.id} 
      className={props.className} 
      onClick={props.onReveal}>
      {props.text}
    </section>
  );
}

export default Card;
