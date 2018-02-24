import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  render() {
    return (
      <Button>{this.props.label}</Button>
    )
  }
}

export default Likes;
