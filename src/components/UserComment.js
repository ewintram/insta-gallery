import React from 'react';

class UserComment extends React.Component {
  render() {
    return (
      <li>
        {this.props.username}<br />
        {this.props.text}
      </li>
    )
  }
}
export default UserComment;
