import React, { Component } from 'react';
import logo from './logo.svg';
import Photo from './Photo';
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
          <Photo photo={this.props.posts[0]} />
        </p>
      </div>
    );
  }
}

export default App;
