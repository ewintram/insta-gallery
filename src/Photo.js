import React, { Component } from 'react';
import data from './photoCardsData.json';

class Photo extends React.Component {
  render() {
    return (
      <li>
        <img src={require(`./images/${data[0].imageLink}`)} />
      </li>
    )
  }
}

export default Photo;
