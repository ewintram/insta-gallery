import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class CommentsForm extends React.Component {
  render() {
    return (
      <form className="commentsForm">
        <FormGroup
          controlId="formBasicText">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            placeholder="Please leave your username"
          />
          <ControlLabel>Comment</ControlLabel>
            <FormControl
            componentClass="textarea"
            placeholder="Please leave your comment"
          />
        </FormGroup>
        <Button type="submit" className="submitComment">Submit</Button>
      </form>
    );
  }
}

export default CommentsForm;
