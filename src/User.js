import React from 'react';

class User extends React.Component {
  render() {
    return (
      <h4>
        {this.props.post.username}
      </h4>
    )
  }
}

export default User;
