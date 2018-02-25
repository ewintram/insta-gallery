import React, { Component } from 'react';
import Posts from './Posts';
import { Glyphicon } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.removePost = this.removePost.bind(this);
    this.state = {posts: this.props.posts};
  };

  removePost(index) {
    this.props.posts.splice(index, 1);
    this.setState({posts: this.props.posts});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Glyphicon glyph="glyphicon glyphicon-camera" className="logo"/>
          <h1 className="App-title">Welcome to instaGallery</h1>
        </header>
        <div className="feed">
          <Posts posts={this.props.posts}
            removePost={this.removePost}/>
        </div>
      </div>
    );
  }
}

export default App;
