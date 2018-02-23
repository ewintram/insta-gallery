import React, { Component } from 'react';
import Post from './Post.js';

class Posts extends React.Component {
  render() {
    return (
      <div className="posts">
        <ul>
          {this.props.posts.map((post, index) => {
            return <Post post={post} key={index}/>
            })
          }
        </ul>
      </div>
      )
  }
}
export default Posts;
