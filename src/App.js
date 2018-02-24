import React, { Component } from 'react';
import logo from './logo.svg';
import Posts from './Posts';
import { Glyphicon } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Glyphicon glyph="glyphicon glyphicon-camera" className="logo"/>
          <h1 className="App-title">Welcome to instaGallery</h1>
        </header>
        <div className="feed">
          <Posts posts={this.props.posts} />
        </div>
      </div>
    );
  }
}

export default App;
