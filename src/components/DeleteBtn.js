import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Button, 'custom');

class DeleteBtn extends React.Component {
  render() {
    return (
      <Button onClick={this.props.onClickDelete} bsStyle="custom" bsSize="large"><Glyphicon glyph="glyphicon glyphicon-trash"/></Button>
    )
  }
}

export default DeleteBtn;
