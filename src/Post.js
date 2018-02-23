import React, { Component } from 'react';
import Photo from './Photo.js';
import User from './User.js';

class Post extends React.Component {
  render() {
    return (
      <li>
        <User post={this.props.post}/>
        <Photo post={this.props.post}/>
      </li>
    )
  }
}
export default Post;
