import React from 'react';
import { Image } from 'react-bootstrap';

class Photo extends React.Component {
  render() {
    return (
      <Image src={require(`../images/${this.props.post.imageLink}`)} className="image" alt="cat" responsive/>
    )
  }
}

export default Photo;
