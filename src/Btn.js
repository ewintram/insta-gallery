import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Btn extends React.Component {
  render() {
    return (
      <Button>{this.props.label}</Button>
    )
  }
}

export default Btn;
