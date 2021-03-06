import React from 'react';
import { Image } from 'react-bootstrap';

class Avatar extends React.Component {
  render() {
    return (
      <Image src={require(`../avatars/${this.props.post.userIconLink}`)} className="avatar" alt="user icon" circle/>
    )
  }
}

export default Avatar;
