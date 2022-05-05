import React, { Component } from 'react';

function Button({ onMyClick, children })  {
  return (
    <button type="button" onClick={ onMyClick }>{ children }</button>
  );
}

export default Button;
