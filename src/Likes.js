import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      liked: false
    }
  };

  handleClick = () => {
    if(!this.state.liked) {
      this.setState({
        count: this.state.count + 1,
        liked: true
      })
    } else {
      this.setState({
        count: this.state.count - 1,
        liked: false
      })
    }
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>{this.props.label}</Button>
        <span className="count">{this.state.count} likes</span>
      </div>
    )
  }
}

export default Likes;
