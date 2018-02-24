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
      <div>
        <Button onClick={this.handleClick}>{this.props.label}</Button>
        <span>{this.state.count}</span>
      </div>
    )
  }
}

export default Likes;
