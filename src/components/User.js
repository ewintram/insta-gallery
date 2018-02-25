import React from 'react';

class User extends React.Component {
  render() {
    return (
      <h2>
        {this.props.post.username}
      </h2>
    )
  }
}

export default User;
