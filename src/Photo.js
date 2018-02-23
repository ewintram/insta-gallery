import React, { Component } from 'react';

class Photo extends React.Component {
  render() {
    return (
      <li>
        <img src={require(`./images/${this.props.photo.imageLink}`)} />
      </li>
    )
  }
}

export default Photo;
