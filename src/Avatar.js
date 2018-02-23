import React, { Component } from 'react';

class Avatar extends React.Component {
  render() {
    return (
      <img src={require(`./avatars/${this.props.post.userIconLink}`)} />
    )
  }
}

export default Avatar;
