import React from 'react';

function Card({text, ...props}) {
  return (
    <section {...props}>
      {text}
    </section>
  );
}

export default Card;
