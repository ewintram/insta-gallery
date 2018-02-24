import React from 'react';
import { Button } from 'react-bootstrap';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      liked: false,
      bsStyle: "default",
      label: 'Like',
      countLabel: 'likes'
    }
  };

  handleClick = () => {
    if(!this.state.liked) {
      this.setState({
        count: this.state.count + 1,
        liked: true,
        bsStyle: "primary",
        label: 'Liked'
      }, () => this.setCountLabel());
    } else {
      this.setState({
        count: this.state.count - 1,
        liked: false,
        bsStyle: "default",
        label: 'Like'
      }, () => this.setCountLabel())
    }
  };

  setCountLabel = () => {
    if(this.state.count === 1) {
      this.setState({
        countLabel: 'like'
      })
    } else if (this.state.count > 1 || this.state.count === 0){
      this.setState({
        countLabel: 'likes'
      })
    }
  }

  render() {
    return (
      <div>
        <Button bsStyle={this.state.bsStyle} onClick={this.handleClick}>{this.state.label}</Button>
        <span className="count">{this.state.count} {this.state.countLabel}</span>
      </div>
    )
  }
}

export default Likes;
