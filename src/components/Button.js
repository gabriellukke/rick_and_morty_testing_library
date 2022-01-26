import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { onMyClick, children } = this.props;
    return (
      <button type="button" onClick={ onMyClick }>{ children }</button>
    );
  }
}

export default Button;
