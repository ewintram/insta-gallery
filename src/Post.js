import React, { Component } from 'react';
import Avatar from './Avatar.js';
import Photo from './Photo.js';
import User from './User.js';

class Post extends React.Component {
  render() {
    return (
      <li>
        <Avatar post={this.props.post}/>
        <User post={this.props.post}/>
        <Photo post={this.props.post}/>
      </li>
    )
  }
}
export default Post;
