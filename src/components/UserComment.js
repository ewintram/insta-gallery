import React from 'react';

class UserComment extends React.Component {
  render() {
    return (
      <li>
        {this.props.comment.username}<br />
        {this.props.comment.text}
      </li>
    )
  }
}
export default UserComment;
