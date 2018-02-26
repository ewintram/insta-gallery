import React from 'react';

class UserComment extends React.Component {
  render() {
    return (
      <li>
        <p>Username</p>
        {this.props.comment.username}<br />
        <p>Comment</p>
        {this.props.comment.text}
      </li>
    )
  }
}
export default UserComment;
