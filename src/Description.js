import React, { Component } from 'react';

class Description extends React.Component {
  render() {
    return (
      <p>{this.props.post.description}</p>
    )
  }
}

export default Description;
