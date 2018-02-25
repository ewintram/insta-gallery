import React from 'react';
import UserComment from './UserComment';
import CommentsForm from './CommentsForm';

class Comments extends React.Component {
  render() {
    return (
      <div>
        <ul className="comments">
          {this.props.comments.map((comment, index) => {
            return <UserComment comment={comment}
              key={index}/>
            })
          }
        </ul>
        <CommentsForm />
      </div>
    )
  }
}
export default Comments;
