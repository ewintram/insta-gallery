import React, { Component } from 'react';
import logo from './logo.svg';
import Posts from './Posts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="feed">
          <Posts posts={this.props.posts} />
        </p>
      </div>
    );
  }
}

export default App;
