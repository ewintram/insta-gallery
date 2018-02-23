import React, { Component } from 'react';
import Avatar from './Avatar.js';
import Photo from './Photo.js';
import User from './User.js';
import { Grid, Media, Row } from 'react-bootstrap';

class Post extends React.Component {
  render() {
    return (
      <li>
        <Media>
          <Media.Left>
            <Avatar post={this.props.post}/>
          </Media.Left>
          <Media.Body>
            <User post={this.props.post}/>
          </Media.Body>
        </Media>
        <Grid>
          <Row>
            <Photo post={this.props.post}/>
          </Row>
        </Grid>
      </li>
    )
  }
}
export default Post;
