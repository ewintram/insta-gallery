import React, { Component } from 'react';

class Photo extends React.Component {
  render() {
    return (
      <img src={require(`./images/${this.props.post.imageLink}`)} alt="cat"/>
    )
  }
}

export default Photo;
