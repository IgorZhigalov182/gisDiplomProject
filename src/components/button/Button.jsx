import React from 'react';
import './button.css';

const Button = ({ value, onClick, className, style }) => {
  return (
    <button className={className} onClick={onClick} style={style}>
      {value}
    </button>
  );
};

export default Button;
