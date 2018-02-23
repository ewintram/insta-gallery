import React, { Component } from 'react';
import Photo from './Photo.js';

class Posts extends React.Component {
  render() {
    return (
      <div className="posts">
        <ul>
          {this.props.posts.map((post, index) => {
            return <Photo photo={post} key={index}/>
            })
          }
        </ul>
      </div>
      )
  }
}
export default Posts;
