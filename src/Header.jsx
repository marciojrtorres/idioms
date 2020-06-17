import React from 'react';
import './Header.scss';

export default ({max, onChange, howMany}) => {
  return (
    <header>
      <input type="range" min="10" max={max}
        value={howMany} onChange={onChange} />
      <output>{howMany}</output>
    </header>
  );
}
