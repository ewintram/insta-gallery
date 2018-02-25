import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class DeleteBtn extends React.Component {
  render() {
    return (
      <Button onClick={this.props.onClickDelete}><Glyphicon glyph="glyphicon glyphicon-trash"/></Button>
    )
  }
}

export default DeleteBtn;
