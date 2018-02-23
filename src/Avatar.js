import React, { Component } from 'react';

class Avatar extends React.Component {
  render() {
    return (
      <img width={64} src={require(`./avatars/${this.props.post.userIconLink}`)} className="avatar"/>
    )
  }
}

export default Avatar;
