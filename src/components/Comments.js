import React from 'react';
import UserComment from './UserComment.js';

class Comments extends React.Component {
  render() {
    return (
      <ul className="comments">
        {this.props.comments.map((comment, index) => {
          return <UserComment comment={comment}
            key={index}/>
          })
        }
      </ul>
    )
  }
}
export default Comments;
